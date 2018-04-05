import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CounselorDashboardPage } from '../../pages/counselor/home/home';

@Injectable()
export class AuthProvider {

  private id: string = 'admin';
  private password: string = 'admin';

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(id: string, password: string){
    if(this.authenticateUser(id, password)){
      return true;
    }else{
      console.log("Invalid Credentials.")
      return false;
    }
  }

  authenticateUser(id: string, password: string){
    if(id === this.id && password === this.password){
      return true;
    }else{
      return false;
    }
  }

}
