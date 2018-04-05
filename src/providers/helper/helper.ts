import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { MenuController } from 'ionic-angular';

@Injectable()
export class HelperProvider {

  constructor(public http: HttpClient, private menu: MenuController) {
    console.log('Hello HelperProvider Provider');
  }

  setActiveMenu(menuID:string){
    this.menu.enable(true,menuID);
  }

  markInvalidFields(formGroup: FormGroup) {
    for(let control in formGroup.controls){
      formGroup.controls[control].markAsTouched();
      formGroup.controls[control].updateValueAndValidity();
    }
    let ionItems = document.getElementsByTagName("ion-item");
    if(ionItems){
      for(var i = 0; i < ionItems.length; i++){
        if (ionItems[i].classList.contains('ng-untouched')) {
          ionItems[i].classList.remove('ng-untouched');
          ionItems[i].classList.add('ng-touched');
        }
      }
    }
    let pinAutoComplete = document.getElementsByTagName("ng2-completer")[0];
    if(pinAutoComplete && pinAutoComplete.classList.contains('ng-untouched')){
      pinAutoComplete.classList.remove('ng-untouched');
      pinAutoComplete.classList.add('ng-touched');
    }
  }

  removeEmptyFromObject = (obj) => {
    const o = JSON.parse(JSON.stringify(obj)); // Clone source oect.
  
    Object.keys(o).forEach(key => {
      if (o[key] && typeof o[key] === 'object')
        o[key] = this.removeEmptyFromObject(o[key]);  // Recurse.
      else if (o[key] === undefined || o[key] === null)
        delete o[key]; // Delete undefined and null.
      else
        o[key] = o[key];  // Copy value.
    });
  
    return o; // Return new object.
  };

  emailOrEmptyValidator(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
  }

  markInvalidSelect(formGroup, ctrlName: string) {
    let shadesEl = document.querySelector('[formControlName="' + ctrlName + '"]').parentElement.parentElement.parentElement;
    const control = formGroup.get(ctrlName);
    if (control.errors != null) {
      shadesEl.classList.remove('ng-untouched');
      shadesEl.classList.add('ng-invalid', 'ng-touched', 'ng-dirty');
    } else {
      shadesEl.classList.remove('ng-dirty', 'ng-invalid');
    }
  }

}
