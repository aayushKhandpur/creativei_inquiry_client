import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { InqProvider } from '../../../providers/inq/inq';
import { HelperProvider } from '../../../providers/helper/helper';
import { SortProvider } from '../../../providers/sort/sort';
import { InqDetailsPage } from '../inq-details/inq-details';
import { InqSummaryPage } from '../inq-summary/inq-summary';
import { FollowUpModalPage } from '../follow-up-modal/follow-up-modal';

@Component({
  selector: 'page-inq-list',
  templateUrl: 'inq-list.html',
})
export class InqListPage {

  private inquiries;
  private sortedInquiries;
  private responseData;
  private sortBy;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private inqProvider: InqProvider, private helper: HelperProvider, private sort: SortProvider, private modalCtrl: ModalController) {

    this.getAllInq();
    this.sortBy = {
      id : {
        bool : false,
        ascending : false,
        descending : false
      },
      caseIndex : {
        bool : false,
        ascending : false,
        descending : false
      },
      name : {
        bool : false,
        ascending : false,
        descending : false
      },
      inquiryDate : {
        bool : false,
        ascending : false,
        descending : false
      },
      areaOfInterest : {
        bool : false,
        ascending : false,
        descending : false
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InqListPage');
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

  getAllInq(){
    this.presentLoadingCustom();
    this.inqProvider.getAllInq()
      .subscribe(
        data => {
          this.responseData = data;
        },
        error => { console.log("GET unsucessful, the server returned this error:", error), this.loading.dismissAll(); },
        () => {
          console.log("complete");
          this.loading.dismissAll();
          this.inquiries = this.responseData.data;
        }
      )
  }

  editInq(id){
    this.navCtrl.push(InqDetailsPage,id);
  }
  
  viewInq(id){
    this.navCtrl.push(InqSummaryPage,id);
  }

  toggleSeeMore(i){
    this.inquiries[i].seeMore = !this.inquiries[i].seeMore;
  }

  defaultSortingCase(object){
    Object.keys(object).forEach(key => {
      object[key]['bool'] = false;
      object[key]['ascending'] = false;
      object[key]['descending'] = false;
    })
  }

  toggleSort(sortByThis){
    if(!this.sortBy[sortByThis]['bool']){
      this.defaultSortingCase(this.sortBy);
      this.sortBy[sortByThis]['bool'] = true;
      this.sortBy[sortByThis]['ascending'] = true;
      this.sortInqList(this.inquiries,sortByThis,'ascending');
    }else{
      if(this.sortBy[sortByThis]['ascending']) this.sortInqList(this.inquiries,sortByThis,'descending');
      this.sortBy[sortByThis]['ascending'] = !this.sortBy[sortByThis]['ascending']
      if(this.sortBy[sortByThis]['descending']) this.sortInqList(this.inquiries,sortByThis,'ascending');
      this.sortBy[sortByThis]['descending'] = !this.sortBy[sortByThis]['descending']
    }
  }

  sortInqList(data,field,order){
    if(field != 'followUpDetails' && field != 'caseIndex'){
      this.sortedInquiries = this.sort.byString(data,field,order);
    }
  }

  filterInqByDate(from,to){
    this.inquiries = this.inquiries.filter(inq => inq.inquiryDate >= from && inq.inquiryDate <= to);
    console.log(this.inquiries);
  }

  openFollowUpModal(id,name){
    let modal = this.modalCtrl.create(
      FollowUpModalPage,
      {id: id, name: name}
    )
    modal.present();
    modal.onDidDismiss(data =>{
      if(data){
        console.log(data);
      }
    });
  }

}
