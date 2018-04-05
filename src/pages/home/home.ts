import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CounselorDashboardPage } from '../counselor/home/home';
import { InqFormPersonalPage } from '../visitor/inq-form-personal/inq-form-personal';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isLogin: boolean = false;
  private loginForm: FormGroup;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      id: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login(){
    if(this.auth.login(this.loginForm.value.id, this.loginForm.value.password)){
      this.goToCounselorDash();
    }
  }

  goToCounselorDash(){
    this.navCtrl.setRoot(CounselorDashboardPage, {}, {animate: true, direction: 'forward'});
  }
  
  goToVisitorPage(){
    this.navCtrl.setRoot(InqFormPersonalPage, {}, {animate: true, direction: 'forward'});
  }
  
  toggleLogin(){
    this.isLogin = !this.isLogin;
  }
}
