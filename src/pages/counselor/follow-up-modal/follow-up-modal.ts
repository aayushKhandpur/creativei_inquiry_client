import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FollowUpProvider } from '../../../providers/follow-up/follow-up'
import { NotificationProvider } from '../../../providers/notification/notification';
import { NotificationMessageProvider } from '../../../providers/notification-message/notification-message';
import { HelperProvider } from '../../../providers/helper/helper';

@Component({
  selector: 'page-follow-up-modal',
  templateUrl: 'follow-up-modal.html',
})
export class FollowUpModalPage {

  private enums;
  private followUpStatus;
  private subStatus;
  private followUpType;
  private caseIndex;
  private inquiryId;
  private inquiryName;
  private currentFollowUp;

  private followUpForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private formBuilder: FormBuilder,private followUpProvider: FollowUpProvider, private notify: NotificationProvider, private message: NotificationMessageProvider, private datePipe: DatePipe, private helper: HelperProvider) {

    this.followUpForm = this.formBuilder.group({
      followUpType: ['', Validators.required],
      followUpStatus: ['', Validators.required],
      remark: [''],
      caseIndex: ['', Validators.required],
      subStatus: ['', Validators.required]
    });

    this.inquiryId = this.navParams.get('id');
    this.inquiryName = this.navParams.get('name');

    this.patchForm();
    this.setEnums();
    this.setFollowUpStatus();
    this.setSubStatus();
    this.setFollowUpType();
    this.setCaseIndex();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowUpModalPage');
  }

  logForm(){
    if(!this.currentFollowUp){
      if(this.followUpForm.valid){
        let request = this.followUpForm.value;
        request.inquiryId = this.inquiryId;
        request.followUpDate = this.getToday();
        console.log(request);
        this.followUpProvider.create(request)
        .subscribe(
          data => {
            let response: any = data;
            if(response.data){
              this.notify.showInfo("Follow up created successfully");
              console.log("Follow up creation successful, the response data is:", data);
            }else if(response.exception){
              this.notify.showError("Follow up creation failed");
              console.log("Follow up creation failed, the response data is:", data);
            }
          },
          error => {console.log("POST unsuccessful, the server returned this error:", error);},
          () => {
            console.log("Complete");
            this.view.dismiss(this.followUpForm.value);
          }
        )
      }
    }else if(this.currentFollowUp){
      if(this.followUpForm.valid){
        let request = this.followUpForm.value;
        request.id = this.currentFollowUp.id;
        request.inquiryId = this.inquiryId;
        request.followUpDate = this.getToday();
        console.log(request);
        this.followUpProvider.update(request)
        .subscribe(
          data => {
            let response: any = data;
            if(response.data){
              this.notify.showInfo("Follow up updated successfully");
              console.log("Follow up updation successful, the response data is:", data);
            }else if(response.exception){
              this.notify.showError("Follow up updation failed");
              console.log("Follow up updation failed, the response data is:", data);
            }
          },
          error => {console.log("POST unsuccessful, the server returned this error:", error);},
          () => {
            console.log("Complete");
            this.view.dismiss(this.followUpForm.value);
          }
        )
      }
    }
  }

  patchForm(){
    if(this.navParams.get('followUp')){
      this.currentFollowUp = this.navParams.get('followUp');
      let patch = this.helper.removeEmptyFromObject(this.currentFollowUp);
      this.followUpForm.patchValue(patch);
    }
  }

  closeModal(){
    this.view.dismiss(null);
  }

  getToday(){
    return this.datePipe.transform(Date.now(),'yyyy-MM-dd');
  }
  
  setEnums(){
    this.enums = this.followUpProvider.getEnums();
  }
  setFollowUpStatus(){
    this.followUpStatus = this.enums.data.followUpStatus;
  }
  setSubStatus(){
    this.subStatus = this.enums.data.followUpSubStatus;
  }
  setFollowUpType(){
    this.followUpType = this.enums.data.followUpType;
  }
  setCaseIndex(){
    this.caseIndex = this.enums.data.caseIndex;
  }
}
