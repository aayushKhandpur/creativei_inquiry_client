import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { FollowUpProvider } from '../../../providers/follow-up/follow-up'

@Component({
  selector: 'page-inq-close-modal',
  templateUrl: 'inq-close-modal.html',
})
export class InqCloseModalPage {

  private enums;
  private closingStatus;
  private closingSubStatus;

  private inqCloseForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private formBuilder: FormBuilder,private followUpProvider: FollowUpProvider) {

    this.inqCloseForm = this.formBuilder.group({
      closingStatus: ['', Validators.required],
      closingSubStatus: ['', Validators.required],
      closingRemark: ['']
    });

    this.setEnums();
    this.setClosingStatus();
    this.setClosingSubStatus();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqCloseModalPage');
  }

  closeInquiry(){
    if(this.inqCloseForm.valid){
      console.log(this.inqCloseForm.value);
      this.view.dismiss(this.inqCloseForm.value);
    }
  }

  closeModal(){
    this.view.dismiss(null);
  }
  
  setEnums(){
    this.enums = this.followUpProvider.getEnums();
  }
  setClosingStatus(){
    this.closingStatus = this.enums.data.followUpStatus;
  }
  setClosingSubStatus(){
    this.closingSubStatus = this.enums.data.followUpSubStatus;
  }
}
