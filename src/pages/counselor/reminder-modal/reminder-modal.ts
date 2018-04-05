import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ReminderProvider } from '../../../providers/reminder/reminder'
import { HelperProvider } from '../../../providers/helper/helper';
import { NotificationProvider } from '../../../providers/notification/notification';

@Component({
  selector: 'page-reminder-modal',
  templateUrl: 'reminder-modal.html',
})
export class ReminderModalPage {

  private reminderId;
  private currentReminder;
  private canEdit = true;

  private reminderForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private formBuilder: FormBuilder,private reminderProvider: ReminderProvider, private helper: HelperProvider, private notify: NotificationProvider) {

    this.reminderForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      time: ['', Validators.required]
    });

    this.reminderId = this.navParams.get('id');
    if(this.navParams.get('view')) this.canEdit = false;

    this.patchForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderModalPage');
  }

  logForm(){
    if(!this.currentReminder){
      if(this.reminderForm.valid){
        let request = this.reminderForm.value;
        console.log(request);
        this.reminderProvider.create(request)
        .subscribe(
          data => {
            let response: any = data;
            if(response.data){
              this.notify.showInfo("Reminder created successfully");
              console.log("Reminder creation successful, the response data is:", data);
            }else if(response.exception){
              this.notify.showError("Reminder creation failed");
              console.log("Reminder creation failed, the response data is:", data);
            }
          },
          error => {console.log("POST unsuccessful, the server returned this error:", error);},
          () => {
            console.log("Complete");
            this.view.dismiss(this.reminderForm.value);
          }
        )
      }
    }else if(this.currentReminder){
      if(this.reminderForm.valid){
        let request = this.reminderForm.value;
        request.id = this.currentReminder.id;
        console.log(request);
        this.reminderProvider.update(request)
        .subscribe(
          data => {
            let response: any = data;
            if(response.data){
              this.notify.showInfo("Reminder updated successfully");
              console.log("Reminder updation successful, the response data is:", data);
            }else if(response.exception){
              this.notify.showError("Reminder updation failed");
              console.log("Reminder updation failed, the response data is:", data);
            }
          },
          error => {console.log("POST unsuccessful, the server returned this error:", error);},
          () => {
            console.log("Complete");
            this.view.dismiss(this.reminderForm.value);
          }
        )
      }
    }
  }

  closeModal(){
    this.view.dismiss(null);
  }

  patchForm(){
    if(this.navParams.get('reminder')){
      this.currentReminder = this.navParams.get('reminder');
      let patch = this.helper.removeEmptyFromObject(this.currentReminder);
      this.reminderForm.patchValue(patch);
    }
  }

  toggleEdit(){
    this.canEdit = !this.canEdit;
  }

}
