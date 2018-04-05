import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
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
import { InqFormEducationGuardianPage } from '../inq-form-education-guardian/inq-form-education-guardian';

@Component({
  selector: 'page-inq-form-personal',
  templateUrl: 'inq-form-personal.html',
})
export class InqFormPersonalPage {

  private diffState: boolean;
  private responseData;
  private inqForm: FormGroup;
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

  today: string = new Date().toISOString();
  private activeMenu: string = "visitor";

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private inqProvider: InqProvider, private notify: NotificationProvider, private message: NotificationMessageProvider, private localityProvider: LocalityProvider, private helper: HelperProvider, private sort: SortProvider, private completerService: CompleterService) {
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
      areaOfInterest: ['', Validators.required]
    });

    this.helper.setActiveMenu(this.activeMenu);
    this.setEnums();
    this.setGenders();
    this.setQualifications();
    this.setComputerKnowledge();
    this.setAreasOfInterest();
    this.diffState = false;
    this.pinService = this.completerService.remote(null);
    this.pinService.urlFormater(term => {
      return `http://localhost:9002/pincodes?pincode=${term}`;
    });
    this.pinService.dataField("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqFormPersonalPage');
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

  logForm1() {
    if(this.inqForm.valid){
      console.log("Form to be logged", this.inqForm.value);
      this.presentLoadingCustom();
      this.inqProvider.createInq(this.inqForm.value)
        .subscribe(
        data => { 
          this.responseData = data;
          if(this.responseData.data){
            this.notify.showInfo(this.message.INQUIRY.REGISTER.SUCCESS);
            console.log("POST successful, the response data is:", data);
          }else{
            this.notify.showError(this.message.INQUIRY.REGISTER.FAILURE);
            console.log("POST unsucessful, server responded with error", this.responseData.exception);
          }
        },
        error => { console.log("POST unsuccessful, the server returned this error:", error); this.loading.dismissAll(); },
        () => {
          console.log("complete");
          this.loading.dismissAll();
          if(this.responseData.data){
            this.navCtrl.push(InqFormEducationGuardianPage,{ data: this.responseData });
          }
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
    }
  }

  changeState() {
    this.diffState = !this.diffState;
  }

  setLocality(locality){
    this.city = locality.data.city;
    this.state = locality.data.state;
    this.country = locality.data.country;
    this.areas = this.sort.byString(locality.data.locality, 'name','ascending');
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

}
