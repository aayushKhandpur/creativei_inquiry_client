import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CompleterService, RemoteData, CompleterItem } from 'ng2-completer';

import { InqProvider } from '../../../providers/inq/inq';
import { NotificationProvider } from '../../../providers/notification/notification';
import { NotificationMessageProvider } from '../../../providers/notification-message/notification-message';
import { LocalityProvider } from '../../../providers/locality/locality';
import { HelperProvider } from '../../../providers/helper/helper';
import { SortProvider } from '../../../providers/sort/sort';
import { InqCloseModalPage } from '../inq-close-modal/inq-close-modal';

@Component({
  selector: 'page-inq-details',
  templateUrl: 'inq-details.html',
})
export class InqDetailsPage {

  private pinService: RemoteData;
  private localities;
  private areas;
  private city;
  private state;
  private country;
  private enums;
  private genders;
  private hQualifications;
  private computerKnowledge;
  private areasOfInterest;
  private streams;
  private eduStatus;
  private eduType;
  private markScheme;
  private guardianRelation;
  private guardianOccupation;
  private enqSource;
  private responseData;
  private currentInq;
  private currentInqId;
  private currentInqAddressId;
  private currentInqEducationId;
  private currentInqGuardianId;
  private currentInqMarketingId;
  private currentInqStatus;
  private currentInqClosingStatus;
  private currentInqClosingSubStatus;
  private currentInqClosingRemark;
  private requestData;

  private inqForm: FormGroup;

  today : string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private modalCtrl: ModalController, private inqProvider: InqProvider, private notify: NotificationProvider, private message: NotificationMessageProvider, private localityProvider: LocalityProvider, private helper: HelperProvider, private sort: SortProvider, private completerService: CompleterService) {

    this.updateInq();
    
    this.inqForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: this.formBuilder.group({
        addressLine1: [''],
        locationId: ['', Validators.required],
        pin: ['', Validators.required]
      }),
      mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      hQualification: ['', Validators.required],
      computerKnowledge: ['', Validators.required],
      areaOfInterest: ['', Validators.required],
      education: this.formBuilder.array([
        this.formBuilder.group({
          educationQualification: ['',Validators.required],
          instituteName: [''],
          stream: [''],
          status: [''],
          year: [''],
          type: [''],
          aggregateMarks: [''],
          markScheme: ['']
        })
      ]),
      guardian: this.formBuilder.group({
        name: ['',Validators.required],
        relation: ['',Validators.required],
        phoneNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        email: ['',this.helper.emailOrEmptyValidator],
        occupation: ['']
      }),
      marketing: this.formBuilder.group({
        source: ['',Validators.required],
        referred: [false],
        referant: ['']
      })
    });

    this.setEnums();
    this.setGenders();
    this.setQualifications();
    this.setComputerKnowledge();
    this.setAreasOfInterest();
    this.setStreams();
    this.setEduStatus();
    this.setEduType();
    this.setMarkScheme();
    this.setGuardianRelation();
    this.setGuardinaOccupation();
    this.setMarketingSource();
    this.pinService = this.completerService.remote(null);
    this.pinService.urlFormater(term => {
      return `http://localhost:9002/pincodes?pincode=${term}`;
    });
    this.pinService.dataField("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqDetailsPage');
  }

  private loading;

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <img src="../../assets/imgs/loading.svg" />
      `
    });
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    this.loading.present();
  }
  logForm() {
    if(this.inqForm.valid){
      if(this.currentInq){
        this.requestData = Object.assign({},this.inqForm.value);
        this.requestData.id = this.currentInqId;
        this.requestData.address.id = this.currentInqAddressId;
        this.requestData.education[0].id = this.currentInqEducationId;
        this.requestData.guardian.id = this.currentInqGuardianId;
        this.requestData.marketing.id = this.currentInqMarketingId;
        this.requestData.inquiryStatus = this.currentInqStatus;
        this.requestData.closingStatus = this.currentInqClosingStatus;
        this.requestData.closingSubStatus = this.currentInqClosingSubStatus;
        this.requestData.closingRemark = this.currentInqClosingRemark;
      }else{
        this.requestData = Object.assign({},this.inqForm.value);
      }
      console.log("Form to be logged", this.requestData);
      this.presentLoadingCustom();
      this.inqProvider.createInq(this.requestData)
        .subscribe(
        data => { 
          this.responseData = data;
          if(this.responseData.data){
            if(this.currentInq){
              this.notify.showInfo(this.message.INQUIRY.UPDATE.SUCCESS);
            }else this.notify.showInfo(this.message.INQUIRY.REGISTER.SUCCESS);
            console.log("POST successful, the response data is:", data);
          }else{
            if(this.currentInq){
              this.notify.showError(this.message.INQUIRY.UPDATE.FAILURE);
            }else this.notify.showError(this.message.INQUIRY.REGISTER.FAILURE);
            console.log("POST unsucessful, server responded with error", this.responseData.exception);
          }
        },
        error => { console.log("POST unsuccessful, the server returned this error:", error); this.loading.dismissAll(); },
        () => {
          console.log("complete");
          this.loading.dismissAll();
        }
      );
    }else{
      this.notify.showError(this.message.FORM.INVALID);
      console.log(this.inqForm);
      this.helper.markInvalidFields(this.inqForm);
      this.helper.markInvalidSelect(this.inqForm, 'gender');
      this.helper.markInvalidSelect(this.inqForm, 'dob');
      this.helper.markInvalidSelect(this.inqForm, 'hQualification');
      this.helper.markInvalidSelect(this.inqForm, 'computerKnowledge');
      this.helper.markInvalidSelect(this.inqForm, 'areaOfInterest');
      if(this.areas && this.inqForm.value.address.pin.length == 6)this.helper.markInvalidSelect(this.inqForm.get('address'), 'locationId');
      this.helper.markInvalidSelect(this.inqForm.get('education').at(0), 'educationQualification');
      this.helper.markInvalidSelect(this.inqForm.get('education').at(0), 'stream');
      this.helper.markInvalidSelect(this.inqForm.get('education').at(0), 'status');
      this.helper.markInvalidSelect(this.inqForm.get('education').at(0), 'type');
      this.helper.markInvalidSelect(this.inqForm.get('education').at(0), 'markScheme');
      this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'relation');
      this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'occupation');
      this.helper.markInvalidSelect(this.inqForm.get('marketing'), 'source');
    }
  }

  updateInq(){
    if(typeof this.navParams.data === 'number'){
      this.currentInqId = this.navParams.data;
      console.log("Inquiry ID to be edited is",this.currentInqId);
      this.presentLoadingCustom();
      this.inqProvider.getInqById(this.currentInqId)
        .subscribe(
          data => {
            this.currentInq = data;
          },
          error => { console.log("GET unsucessful, the server returned this error:", error), this.loading.dismissAll(); },
          () => {
            console.log("complete");
            this.patchData(this.currentInq.data);
            this.getLocality(this.currentInq.data.address.pin);
            this.currentInqAddressId = this.currentInq.data.address.id;
            if(this.currentInq.data.education[0]) this.currentInqEducationId = this.currentInq.data.education[0].id;
            if(this.currentInq.data.guardian) this.currentInqGuardianId = this.currentInq.data.guardian.id;
            if(this.currentInq.data.marketing) this.currentInqMarketingId = this.currentInq.data.marketing.id;
            this.setClosingStatus(this.currentInq.data.closingStatus);
            this.setClosingSubStatus(this.currentInq.data.closingSubStatus);
            this.setClosingRemark(this.currentInq.data.closingRemark);
            this.setInqStatus(this.currentInq.data.inquiryStatus);
            this.loading.dismissAll();
          }
        )
    }
  }

  patchData(inq){
    let patch = this.helper.removeEmptyFromObject(inq);
    console.log("Object to be patched:", patch);
    this.inqForm.patchValue(patch);
  }

  isInqOpen(status){
    return status == "open"?true:false;
  }

  changeInqStatus(e){
    console.log(e);
    if(e == "close"){
      this.showInqCloseModal();
    }else if(e == "open"){
      this.setInqStatus('open');
      this.setClosingStatus(null);
      this.setClosingSubStatus(null);
      this.setClosingRemark(null);
      this.logForm();
    }
  }

  showInqCloseModal(){
    let modal = this.modalCtrl.create(
      InqCloseModalPage
    )
    modal.present();
    modal.onDidDismiss(data =>{
      if(data){
        console.log(data);
        this.setClosingStatus(data.closingStatus);
        this.setClosingSubStatus(data.closingSubStatus);
        this.setClosingRemark(data.closingRemark);
        this.setInqStatus('close');
        this.logForm();
      }
    });
  }

  setClosingStatus(data){
    if(data){
      this.currentInqClosingStatus = data;
    }else{
      this.currentInqClosingStatus = '';
    }
  }
  setClosingSubStatus(data){
    if(data){
      this.currentInqClosingSubStatus = data;
    }else{
      this.currentInqClosingSubStatus = '';
    }
  }
  setClosingRemark(data){
    if(data){
      this.currentInqClosingRemark = data;
    }else{
      this.currentInqClosingRemark = '';
    }
  }

  setInqStatus(status){
    this.currentInqStatus = status.toLowerCase();
  }

  setLocality(locality){
    this.city = locality.data.city;
    this.state = locality.data.state;
    this.country = locality.data.country;
    this.areas = this.sort.byString(locality.data.locality,'name','ascending');
  }

  getLocality(pincode){
    console.log("Getting localities for: ",pincode)
    this.localityProvider.getLocality(pincode)
      .subscribe(
        data => {console.log(data), this.localities = data;},
        error => {console.log("ERROR GETTING LOCALITIES")},
        () => {console.log("COMPLETE"), this.setLocality(this.localities);}
      )
  }

  onPincodeSelected(pincode: CompleterItem){
    if(pincode){
      console.log(pincode);
      this.getLocality(pincode.originalObject);
    }
  }

  setPincodeFieldTypeNumber(){
    document.getElementById('completer-input').setAttribute('type','number');
  }

  setEnums(){
    this.enums = this.inqProvider.getEnums();
  }
  setGenders(){
    this.genders = this.enums.data.gender;
  }
  setQualifications(){
    this.hQualifications = this.enums.data.highestEducation;
  }
  setComputerKnowledge(){
    this.computerKnowledge = this.enums.data.computerKnowledge;
  }
  setAreasOfInterest(){
    this.areasOfInterest = this.enums.data.areaOfInterest;
  }
  setStreams(){
    this.streams = this.enums.data.stream;
  }
  setEduStatus(){
    this.eduStatus = this.enums.data.educationStatus;
  }
  setEduType(){
    this.eduType = this.enums.data.educationType;
  }
  setMarkScheme(){
    this.markScheme = this.enums.data.markScheme;
  }
  setGuardianRelation(){
    this.guardianRelation = this.enums.data.relation;
  }
  setGuardinaOccupation(){
    this.guardianOccupation = this.enums.data.occupation;
  }
  setMarketingSource(){
    this.enqSource = this.enums.data.marketingSource;
  }

}
