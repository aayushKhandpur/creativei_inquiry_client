import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { HomePage } from '../../pages/home/home';
import { InqFormPersonalPage } from '../inq-form-personal/inq-form-personal';

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

  // goToHome() {
  //   this.navCtrl.setRoot(HomePage);
  // }
  newInquiry() {
    this.navCtrl.setRoot(InqFormPersonalPage);
  }

}
