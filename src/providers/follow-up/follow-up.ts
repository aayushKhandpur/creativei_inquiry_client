import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowUpProvider {
  
  private baseUrl: string = 'http://localhost:9002/follow-up';
  private enums;

  constructor(public http: HttpClient) {
    console.log('Hello FollowUpProvider Provider');
  }

  setEnums(){
    this.http.get(this.baseUrl+'/server-info')
    .subscribe(
      data => {this.enums = data},
      error => {console.log("Error getting enums")},
      () => {console.log("Set enum complete")}
    );
  }
  getEnums(){
    if(this.enums){
      return this.enums;
    }else{
      this.setEnums();
      return this.enums;
    }
  }

  create(data){
    return this.http.post(this.baseUrl+'/create',data);
  }

  update(data){
    return this.http.post(this.baseUrl+'/update',data);
  }

}
