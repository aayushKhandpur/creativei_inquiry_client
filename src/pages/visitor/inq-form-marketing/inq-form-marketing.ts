import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { InqProvider } from '../../../providers/inq/inq';
import { NotificationProvider } from '../../../providers/notification/notification';
import { NotificationMessageProvider } from '../../../providers/notification-message/notification-message';
import { HelperProvider } from '../../../providers/helper/helper';
import { ThankyouPage } from '../thankyou/thankyou';

@Component({
  selector: 'page-inq-form-marketing',
  templateUrl: 'inq-form-marketing.html',
})
export class InqFormMarketingPage {
  
  private enums;
  private enqSource;
  private currentInq;
  private responseData;
  private requestData;

  private inqForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private inqProvider: InqProvider, private notify: NotificationProvider, private message: NotificationMessageProvider, private helper: HelperProvider) {
    this.currentInq = this.navParams.get('data');
    this.inqForm = this.formBuilder.group({
      marketing: this.formBuilder.group({
        source: ['',Validators.required],
        referred: [false],
        referant: ['']
      })
    });

    this.setEnums();
    this.setMarketingSource();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqFormMarketingPage');
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

  logForm3(){
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
            console.log("POST successful, the response data is:", data)
          }else{
            this.notify.showError(this.message.INQUIRY.UPDATE.FAILURE)
            console.log("POST unsucessful, server responded with error", this.responseData.exception)
          }
        },
        error => { console.log("POST unsuccessful, the server returned this error:", error); this.loading.dismissAll(); },
        () => {
          console.log("complete");
          this.loading.dismissAll();
          if(this.responseData.data){
            this.navCtrl.setRoot(ThankyouPage);
          }
        }
        );
    }else{
      this.notify.showError(this.message.FORM.INVALID);
      console.log(this.inqForm);
      this.helper.markInvalidFields(this.inqForm);
      this.helper.markInvalidSelect(this.inqForm.get('marketing'), 'source');
    }
  }

  setEnums(){
    this.enums = this.inqProvider.getEnums();
  }
  setMarketingSource(){
    this.enqSource = this.enums.data.marketingSource;
  }

  skip(){
    this.navCtrl.setRoot(ThankyouPage)
  }
}
