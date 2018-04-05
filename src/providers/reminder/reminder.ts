import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class ReminderProvider {

  private baseUrl: string = 'http://localhost:9002/reminder';

  constructor(public http: HttpClient, private datePipe: DatePipe) {
    console.log('Hello ReminderProvider Provider');
  }

  create(data){
    return this.http.post(this.baseUrl+'/create', data);
  }

  update(data){
    return this.http.post(this.baseUrl+'/update', data);
  }

  getReminderForToday(){
    let today = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    return this.http.get(this.baseUrl+'/getByDate',{
      params: new HttpParams().set('from',today).set('to',today)
    })
  }

  getReminderForRange(from,to){
    return this.http.get(this.baseUrl+'/getByDate',{
      params: new HttpParams().set('from',from).set('to',to)
    })
  }

}
