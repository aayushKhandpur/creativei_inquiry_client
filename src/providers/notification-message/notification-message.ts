import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMessageProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello NotificationMessageProvider Provider');
  }

  INQUIRY = {
    REGISTER : {
      SUCCESS : "Inquiry Registered Successfully",
      FAILURE : "Server retutned an error. Cannot register inquiry."
    },
    UPDATE : {
      SUCCESS : "Inquiry Updated Successfully",
      FAILURE : "Server retutned an error. Cannot update inquiry."
    }
  }

  FORM = {
    INVALID : "Invalid or missing inquiry details."
  }

}
