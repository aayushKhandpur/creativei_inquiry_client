import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()
export class NotificationProvider {
  
  private toast: Toast;
  
  constructor(public toastCtrl: ToastController) {
    console.log('Hello NotificationProvider Provider');
  }
  
  showInfo(message) {
    try {
      this.toast.dismiss();
    } catch(e) {}
    this.toast = this.toastCtrl.create({
      message: message,
      position: "top",
      showCloseButton: true,
      closeButtonText: "X",
      cssClass: 'info-notification',
      dismissOnPageChange: true
    });
    console.log('Info Toast Presented');
    this.toast.present();
  }

  showError(message) {
    try {
      this.toast.dismiss();
    } catch(e) {}
    this.toast = this.toastCtrl.create({
      message: message,
      position: "top",
      showCloseButton: true,
      closeButtonText: "X",
      cssClass: 'error-notification',
      dismissOnPageChange: true
    });
    console.log('Error Toast Presented');
    this.toast.present();
  }

}
