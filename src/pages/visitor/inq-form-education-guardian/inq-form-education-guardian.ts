import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { InqProvider } from '../../../providers/inq/inq';
import { NotificationProvider } from '../../../providers/notification/notification';
import { NotificationMessageProvider } from '../../../providers/notification-message/notification-message';
import { HelperProvider } from '../../../providers/helper/helper';
import { InqFormMarketingPage } from '../inq-form-marketing/inq-form-marketing';

@Component({
  selector: 'page-inq-form-education-guardian',
  templateUrl: 'inq-form-education-guardian.html',
})
export class InqFormEducationGuardianPage {

  private enums;
  private hQualifications;
  private streams;
  private eduStatus;
  private eduType;
  private markScheme;
  private guardianRelation;
  private guardianOccupation;

  private inqForm: FormGroup;
  private currentInq;
  private responseData;
  private requestData;
  private education;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private inqProvider: InqProvider, private notify: NotificationProvider, private message: NotificationMessageProvider, private helper: HelperProvider) {
    this.currentInq = this.navParams.get('data');
    this.education = this.currentInq.data.hQualification;
    this.inqForm = this.formBuilder.group({
      education: this.formBuilder.array([
        this.formBuilder.group({
          educationQualification: [this.education, Validators.required],
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
      })
    });

    this.setEnums();
    this.setQualifications();
    this.setStreams();
    this.setEduStatus();
    this.setEduType();
    this.setMarkScheme();
    this.setGuardianRelation();
    this.setGuardinaOccupation();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqFormEducationGuardianPage');
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

  logForm2(){
    if(this.inqForm.valid){
      this.requestData = Object.assign({},this.currentInq.data,this.inqForm.value)
      console.log("Form to be logged", this.requestData);
      this.presentLoadingCustom();
      this.inqProvider.updateInq(this.requestData)
        .subscribe(
        data => { 
          this.responseData = data;
          if(this.responseData.data){
            this.notify.showInfo(this.message.INQUIRY.UPDATE.SUCCESS);
            console.log("POST successful, the response data is:", data);
          }else{
            this.notify.showError(this.message.INQUIRY.UPDATE.FAILURE);
            console.log("POST unsucessful, server responded with error", this.responseData.exception);
          }
        },
        error => { console.log("POST unsuccessful, the server returned this error:", error); this.loading.dismissAll(); },
        () => {
          console.log("complete");
          this.loading.dismissAll();
          if(this.responseData.data){
            this.navCtrl.push(InqFormMarketingPage,{ data: this.responseData });
          }
        }
        );
    }else{
      this.notify.showError(this.message.FORM.INVALID);
      console.log(this.inqForm);
      this.helper.markInvalidFields(this.inqForm);
      let educationFormGroup: any = this.inqForm.get('education');
      this.helper.markInvalidSelect(educationFormGroup.at(0), 'educationQualification');
      this.helper.markInvalidSelect(educationFormGroup.at(0), 'stream');
      this.helper.markInvalidSelect(educationFormGroup.at(0), 'status');
      this.helper.markInvalidSelect(educationFormGroup.at(0), 'type');
      this.helper.markInvalidSelect(educationFormGroup.at(0), 'markScheme');
      this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'relation');
      this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'occupation');
    }
  }

  skip(){
    this.navCtrl.push(InqFormMarketingPage,{ data: this.currentInq });
  }

  setEnums(){
    this.enums = this.inqProvider.getEnums();
  }
  setQualifications(){
    this.hQualifications = this.enums.data.highestEducation;
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
}
