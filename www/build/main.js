webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounselorDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inq_details_inq_details__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reminder_reminder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reminder_modal_reminder_modal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inq_summary_inq_summary__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_quote_quote__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CounselorDashboardPage = (function () {
    function CounselorDashboardPage(navCtrl, inqProvider, reminderProvider, helper, sort, quoteProvider, notify, message, modalCtrl) {
        this.navCtrl = navCtrl;
        this.inqProvider = inqProvider;
        this.reminderProvider = reminderProvider;
        this.helper = helper;
        this.sort = sort;
        this.quoteProvider = quoteProvider;
        this.notify = notify;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.activeMenu = "counselor";
        this.today = Date.now();
        this.helper.setActiveMenu(this.activeMenu);
        this.getUnattendedInq();
        this.getInqStats();
        this.getTodo();
        this.getQuote();
    }
    CounselorDashboardPage.prototype.createInq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inq_details_inq_details__["a" /* InqDetailsPage */]);
    };
    CounselorDashboardPage.prototype.viewInq = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__inq_summary_inq_summary__["a" /* InqSummaryPage */], id);
    };
    CounselorDashboardPage.prototype.getUnattendedInq = function () {
        var _this = this;
        this.inqProvider.getUnattendedInquiries()
            .subscribe(function (data) { _this.responseData = data; }, function (error) { console.log("GET unsucessful, the server returned this error: ", error); }, function () {
            _this.unattendedInq = _this.sort.byString(_this.responseData.data, 'inquiryDate', 'descending');
            console.log("GET complete");
        });
    };
    CounselorDashboardPage.prototype.getInqStats = function () {
        var _this = this;
        this.inqProvider.getInquiryStats()
            .subscribe(function (data) { _this.responseData = data; }, function (error) { console.log("GET unsucessful, the server returned this error: ", error); }, function () {
            _this.inqStats = _this.responseData.data;
            console.log("GET complete");
        });
    };
    CounselorDashboardPage.prototype.getTodo = function () {
        var _this = this;
        this.reminderProvider.getReminderForToday()
            .subscribe(function (data) { _this.responseData = data; }, function (error) { console.log("GET unsucessful, the server returned this error: ", error); }, function () {
            _this.todos = _this.responseData.data;
            console.log("GET complete");
        });
    };
    CounselorDashboardPage.prototype.getQuote = function () {
        this.quote = this.quoteProvider.getQuote();
    };
    CounselorDashboardPage.prototype.showAddReminderModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__reminder_modal_reminder_modal__["a" /* ReminderModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    CounselorDashboardPage.prototype.showViewReminderModal = function (reminder) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__reminder_modal_reminder_modal__["a" /* ReminderModalPage */], { reminder: reminder, view: "true" });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    CounselorDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-counselor-dashboard',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div class="blockquote" [title]="quote?.name">{{quote?.quote}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <!-- Left column for inquiries -->\n\n      <ion-col col-6>\n\n        <ion-item-group>\n\n          <ion-item-divider color="primary">Inquiries<span (click)="createInq()" pointer float-right><ion-icon name="add-circle"></ion-icon></span></ion-item-divider>\n\n          <ion-item-group>\n\n            <ion-item-divider class="secondary-header">Unattended Inquiries</ion-item-divider>\n\n            <ion-item *ngFor = "let inq of unattendedInq; let i = index;">\n\n              <ion-grid>\n\n                <ion-row><ion-col col-1 (click)="viewInq(inq.id)" pointer>{{inq.id}}</ion-col><ion-col (click)="viewInq(inq.id)" pointer>{{inq.name}}</ion-col><ion-col>{{inq.areaOfInterest}}</ion-col><ion-col>{{inq.inquiryDate | date: "dd/MM/yyyy"}}</ion-col></ion-row>\n\n              </ion-grid>\n\n            </ion-item>\n\n          </ion-item-group>\n\n        </ion-item-group>\n\n      </ion-col>  \n\n      <!-- Right column for stats and reminders -->\n\n      <ion-col col-6>\n\n        <!-- Stats row -->\n\n        <ion-row>\n\n          <ion-col class="no-padding">\n\n            <ion-item-divider color="primary">Statistics</ion-item-divider>\n\n            <ion-item-group>\n\n              <ion-item>\n\n                <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col align-self-center>Inquiries Today:</ion-col>\n\n                    <ion-col text-right class="inq-stats">{{inqStats?.dailyCount}}</ion-col>\n\n                    <div class="divider"></div>\n\n                    <ion-col align-self-center>Inquiries This Week:</ion-col>\n\n                    <ion-col text-right class="inq-stats">{{inqStats?.weekCount}}</ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-item>\n\n            </ion-item-group>\n\n            <ion-item-group>\n\n              <ion-item-divider class="secondary-header">{{ today | date : "MMMM"}} Summary</ion-item-divider>\n\n              <ion-item>\n\n                <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col align-self-center>Total Inquiries:</ion-col>\n\n                    <ion-col>{{inqStats?.monthCount}}</ion-col>\n\n                    <ion-col align-self-center>Hot Leads:</ion-col>\n\n                    <ion-col>{{inqStats?.hotLeadCount}}</ion-col>\n\n                    <ion-col align-self-center>Conversions:</ion-col>\n\n                    <ion-col>{{inqStats?.enrolledCount}}</ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-item>\n\n            </ion-item-group>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- Reminders row -->\n\n        <ion-row>\n\n          <ion-col class="no-padding">\n\n            <ion-item-group>\n\n              <ion-item-divider color="primary">Todo<span (click)="showAddReminderModal()" pointer float-right><ion-icon name="add-circle"></ion-icon></span></ion-item-divider>\n\n              <ion-item-group>\n\n                <ion-item *ngFor="let todo of todos; let i = index;">\n\n                  <ion-grid>\n\n                    <ion-row><ion-col col-1 (click)="showViewReminderModal(todo)" pointer>{{i+1}}.</ion-col><ion-col (click)="showViewReminderModal(todo)" pointer>{{todo.title}}</ion-col><ion-col text-right>{{todo.time | date:"dd/MM/yyyy @ hh:mm a"}}</ion-col></ion-row>\n\n                  </ion-grid>\n\n                </ion-item>\n\n              </ion-item-group>\n\n            </ion-item-group>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_reminder_reminder__["a" /* ReminderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_sort_sort__["a" /* SortProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_quote_quote__["a" /* QuoteProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CounselorDashboardPage);
    return CounselorDashboardPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_locality_locality__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inq_close_modal_inq_close_modal__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InqDetailsPage = (function () {
    function InqDetailsPage(navCtrl, navParams, formBuilder, loadingCtrl, modalCtrl, inqProvider, notify, message, localityProvider, helper, sort, completerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.inqProvider = inqProvider;
        this.notify = notify;
        this.message = message;
        this.localityProvider = localityProvider;
        this.helper = helper;
        this.sort = sort;
        this.completerService = completerService;
        this.today = new Date().toISOString();
        this.updateInq();
        this.inqForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            address: this.formBuilder.group({
                addressLine1: [''],
                locationId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                pin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
            }),
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]],
            hQualification: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            computerKnowledge: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            areaOfInterest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            education: this.formBuilder.array([
                this.formBuilder.group({
                    educationQualification: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                    instituteName: [''],
                    stream: [''],
                    status: [''],
                    year: [''],
                    type: [''],
                    aggregateMarks: [''],
                    markScheme: ['']
                })
            ]),
            guardian: this.formBuilder.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                relation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                phoneNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]],
                email: ['', this.helper.emailOrEmptyValidator],
                occupation: ['']
            }),
            marketing: this.formBuilder.group({
                source: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                referred: [false],
                referant: ['']
            })
        });
        this.setEnums();
        this.setGenders();
        this.setQualifications();
        this.setComputerKnowledge();
        this.setAreasOfInterest();
        this.setStreams();
        this.setEduStatus();
        this.setEduType();
        this.setMarkScheme();
        this.setGuardianRelation();
        this.setGuardinaOccupation();
        this.setMarketingSource();
        this.pinService = this.completerService.remote(null);
        this.pinService.urlFormater(function (term) {
            return "http://localhost:9002/pincodes?pincode=" + term;
        });
        this.pinService.dataField("data");
    }
    InqDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqDetailsPage');
    };
    InqDetailsPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqDetailsPage.prototype.logForm = function () {
        var _this = this;
        if (this.inqForm.valid) {
            if (this.currentInq) {
                this.requestData = Object.assign({}, this.inqForm.value);
                this.requestData.id = this.currentInqId;
                this.requestData.address.id = this.currentInqAddressId;
                this.requestData.education[0].id = this.currentInqEducationId;
                this.requestData.guardian.id = this.currentInqGuardianId;
                this.requestData.marketing.id = this.currentInqMarketingId;
                this.requestData.inquiryStatus = this.currentInqStatus;
                this.requestData.closingStatus = this.currentInqClosingStatus;
                this.requestData.closingSubStatus = this.currentInqClosingSubStatus;
                this.requestData.closingRemark = this.currentInqClosingRemark;
            }
            else {
                this.requestData = Object.assign({}, this.inqForm.value);
            }
            console.log("Form to be logged", this.requestData);
            this.presentLoadingCustom();
            this.inqProvider.createInq(this.requestData)
                .subscribe(function (data) {
                _this.responseData = data;
                if (_this.responseData.data) {
                    if (_this.currentInq) {
                        _this.notify.showInfo(_this.message.INQUIRY.UPDATE.SUCCESS);
                    }
                    else
                        _this.notify.showInfo(_this.message.INQUIRY.REGISTER.SUCCESS);
                    console.log("POST successful, the response data is:", data);
                }
                else {
                    if (_this.currentInq) {
                        _this.notify.showError(_this.message.INQUIRY.UPDATE.FAILURE);
                    }
                    else
                        _this.notify.showError(_this.message.INQUIRY.REGISTER.FAILURE);
                    console.log("POST unsucessful, server responded with error", _this.responseData.exception);
                }
            }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); _this.loading.dismissAll(); }, function () {
                console.log("complete");
                _this.loading.dismissAll();
            });
        }
        else {
            this.notify.showError(this.message.FORM.INVALID);
            console.log(this.inqForm);
            this.helper.markInvalidFields(this.inqForm);
            this.helper.markInvalidSelect(this.inqForm, 'gender');
            this.helper.markInvalidSelect(this.inqForm, 'dob');
            this.helper.markInvalidSelect(this.inqForm, 'hQualification');
            this.helper.markInvalidSelect(this.inqForm, 'computerKnowledge');
            this.helper.markInvalidSelect(this.inqForm, 'areaOfInterest');
            if (this.areas && this.inqForm.value.address.pin.length == 6)
                this.helper.markInvalidSelect(this.inqForm.get('address'), 'locationId');
            var educationFormGroup = this.inqForm.get('education');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'educationQualification');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'stream');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'status');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'type');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'markScheme');
            this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'relation');
            this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'occupation');
            this.helper.markInvalidSelect(this.inqForm.get('marketing'), 'source');
        }
    };
    InqDetailsPage.prototype.updateInq = function () {
        var _this = this;
        if (typeof this.navParams.data === 'number') {
            this.currentInqId = this.navParams.data;
            console.log("Inquiry ID to be edited is", this.currentInqId);
            this.presentLoadingCustom();
            this.inqProvider.getInqById(this.currentInqId)
                .subscribe(function (data) {
                _this.currentInq = data;
            }, function (error) { console.log("GET unsucessful, the server returned this error:", error), _this.loading.dismissAll(); }, function () {
                console.log("complete");
                _this.patchData(_this.currentInq.data);
                _this.getLocality(_this.currentInq.data.address.pin);
                _this.currentInqAddressId = _this.currentInq.data.address.id;
                if (_this.currentInq.data.education[0])
                    _this.currentInqEducationId = _this.currentInq.data.education[0].id;
                if (_this.currentInq.data.guardian)
                    _this.currentInqGuardianId = _this.currentInq.data.guardian.id;
                if (_this.currentInq.data.marketing)
                    _this.currentInqMarketingId = _this.currentInq.data.marketing.id;
                _this.setClosingStatus(_this.currentInq.data.closingStatus);
                _this.setClosingSubStatus(_this.currentInq.data.closingSubStatus);
                _this.setClosingRemark(_this.currentInq.data.closingRemark);
                _this.setInqStatus(_this.currentInq.data.inquiryStatus);
                _this.loading.dismissAll();
            });
        }
    };
    InqDetailsPage.prototype.patchData = function (inq) {
        var patch = this.helper.removeEmptyFromObject(inq);
        console.log("Object to be patched:", patch);
        this.inqForm.patchValue(patch);
    };
    InqDetailsPage.prototype.isInqOpen = function (status) {
        return status == "open" ? true : false;
    };
    InqDetailsPage.prototype.changeInqStatus = function (e) {
        console.log(e);
        if (e == "close") {
            this.showInqCloseModal();
        }
        else if (e == "open") {
            this.setInqStatus('open');
            this.setClosingStatus(null);
            this.setClosingSubStatus(null);
            this.setClosingRemark(null);
            this.logForm();
        }
    };
    InqDetailsPage.prototype.showInqCloseModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__inq_close_modal_inq_close_modal__["a" /* InqCloseModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.setClosingStatus(data.closingStatus);
                _this.setClosingSubStatus(data.closingSubStatus);
                _this.setClosingRemark(data.closingRemark);
                _this.setInqStatus('close');
                _this.logForm();
            }
        });
    };
    InqDetailsPage.prototype.setClosingStatus = function (data) {
        if (data) {
            this.currentInqClosingStatus = data;
        }
        else {
            this.currentInqClosingStatus = '';
        }
    };
    InqDetailsPage.prototype.setClosingSubStatus = function (data) {
        if (data) {
            this.currentInqClosingSubStatus = data;
        }
        else {
            this.currentInqClosingSubStatus = '';
        }
    };
    InqDetailsPage.prototype.setClosingRemark = function (data) {
        if (data) {
            this.currentInqClosingRemark = data;
        }
        else {
            this.currentInqClosingRemark = '';
        }
    };
    InqDetailsPage.prototype.setInqStatus = function (status) {
        this.currentInqStatus = status.toLowerCase();
    };
    InqDetailsPage.prototype.setLocality = function (locality) {
        this.city = locality.data.city;
        this.state = locality.data.state;
        this.country = locality.data.country;
        this.areas = this.sort.byString(locality.data.locality, 'name', 'ascending');
    };
    InqDetailsPage.prototype.getLocality = function (pincode) {
        var _this = this;
        console.log("Getting localities for: ", pincode);
        this.localityProvider.getLocality(pincode)
            .subscribe(function (data) { console.log(data), _this.localities = data; }, function (error) { console.log("ERROR GETTING LOCALITIES"); }, function () { console.log("COMPLETE"), _this.setLocality(_this.localities); });
    };
    InqDetailsPage.prototype.onPincodeSelected = function (pincode) {
        if (pincode) {
            console.log(pincode);
            this.getLocality(pincode.originalObject);
        }
    };
    InqDetailsPage.prototype.setPincodeFieldTypeNumber = function () {
        document.getElementById('completer-input').setAttribute('type', 'number');
    };
    InqDetailsPage.prototype.setEnums = function () {
        this.enums = this.inqProvider.getEnums();
    };
    InqDetailsPage.prototype.setGenders = function () {
        this.genders = this.enums.data.gender;
    };
    InqDetailsPage.prototype.setQualifications = function () {
        this.hQualifications = this.enums.data.highestEducation;
    };
    InqDetailsPage.prototype.setComputerKnowledge = function () {
        this.computerKnowledge = this.enums.data.computerKnowledge;
    };
    InqDetailsPage.prototype.setAreasOfInterest = function () {
        this.areasOfInterest = this.enums.data.areaOfInterest;
    };
    InqDetailsPage.prototype.setStreams = function () {
        this.streams = this.enums.data.stream;
    };
    InqDetailsPage.prototype.setEduStatus = function () {
        this.eduStatus = this.enums.data.educationStatus;
    };
    InqDetailsPage.prototype.setEduType = function () {
        this.eduType = this.enums.data.educationType;
    };
    InqDetailsPage.prototype.setMarkScheme = function () {
        this.markScheme = this.enums.data.markScheme;
    };
    InqDetailsPage.prototype.setGuardianRelation = function () {
        this.guardianRelation = this.enums.data.relation;
    };
    InqDetailsPage.prototype.setGuardinaOccupation = function () {
        this.guardianOccupation = this.enums.data.occupation;
    };
    InqDetailsPage.prototype.setMarketingSource = function () {
        this.enqSource = this.enums.data.marketingSource;
    };
    InqDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-details',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-details\inq-details.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{currentInq?"Inquiry - Edit":"Inquiry - New"}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="inqForm" (ngSubmit)="logForm()">\n\n    <ion-grid>\n\n      <ion-item-divider color="light">Personal Details\n\n        <span class="inq-status" *ngIf="currentInq">\n\n          Status:\n\n          <select #inqStatus (change)="changeInqStatus(inqStatus.value)">\n\n            <option [selected]=isInqOpen(currentInqStatus) value="open">Open</option>\n\n            <option [selected]=!isInqOpen(currentInqStatus) value="close">Closed</option>\n\n          </select>\n\n        </span>\n\n      </ion-item-divider>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Mobile No.</ion-label>>\n\n            <ion-input type="number" formControlName="mobile" min="0"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Email</ion-label>\n\n            <ion-input type="email" formControlName="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Gender</ion-label>\n\n            <ion-select formControlName="gender">\n\n              <ion-option *ngFor="let gender of genders" [value]=gender>{{gender}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Date of Birth</ion-label>\n\n            <ion-datetime displayFormat="D MMM YYYY" pickerFormat="D MMM YYYY" min = "1900" [max] = "today" formControlName="dob"></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Education</ion-label>\n\n            <ion-select formControlName="hQualification">\n\n              <ion-option *ngFor="let qualification of hQualifications" [value]=qualification>{{qualification}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Computer Knowledge</ion-label>\n\n            <ion-select formControlName="computerKnowledge">\n\n              <ion-option *ngFor="let knowledge of computerKnowledge" [value]=knowledge>{{knowledge}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Course Interested In</ion-label>\n\n            <ion-select formControlName="areaOfInterest">\n\n              <ion-option *ngFor="let areaOfInterest of areasOfInterest" [value]=areaOfInterest>{{areaOfInterest}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider color="light">Address</ion-item-divider>\n\n      <ion-row formGroupName="address">\n\n        <ion-col no-padding>\n\n          <ion-row>\n\n            <ion-col col-3 class="pin-autocomplete">\n\n              <ion-label>Pincode</ion-label>\n\n              <ng2-completer class="completer-limit" formControlName="pin" (focus)="setPincodeFieldTypeNumber()" (selected)="onPincodeSelected($event)" [datasource]="pinService" [minSearchLength]="3" [placeholder]="\'Enter the first 3 digits to search\'" [maxChars]="6" [clearUnselected]="true" [autoMatch]="true" [inputId]="\'completer-input\'"></ng2-completer>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="areas && inqForm.value.address.pin.length == 6">\n\n            <ion-col col-3>\n\n              <ion-item>\n\n                <ion-label floating>Area</ion-label>\n\n                <ion-select formControlName="locationId">\n\n                  <ion-option *ngFor="let area of areas" [value]=area.id>{{area.name | titlecase}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label floating>City</ion-label>\n\n                <ion-input type="text" readonly="true" value="{{city | titlecase}}, {{state | titlecase}}, {{country | titlecase}}"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="areas">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Street</ion-label>\n\n                <ion-input type="text" formControlName="addressLine1"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider color="light">Additional Education Details</ion-item-divider>\n\n      <div formArrayName="education" *ngFor="let item of inqForm.get(\'education\').controls; let i = index;">\n\n        <div [formGroupName]="i">\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Qualification</ion-label>\n\n                <ion-select formControlName="educationQualification">\n\n                  <ion-option *ngFor="let qualification of hQualifications" [value]=qualification>{{qualification}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Stream</ion-label>\n\n                <ion-select formControlName="stream">\n\n                  <ion-option *ngFor="let stream of streams" [value]=stream>{{stream}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Year of Completion</ion-label>\n\n                <ion-input type="number" formControlName="year"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Institute</ion-label>\n\n                <ion-input type="text" formControlName="instituteName"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Education Status</ion-label>\n\n                <ion-select formControlName="status">\n\n                  <ion-option *ngFor="let status of eduStatus" [value]=status>{{status}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Education Type</ion-label>\n\n                <ion-select formControlName="type">\n\n                  <ion-option *ngFor="let type of eduType" [value]=type>{{type}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Marks</ion-label>\n\n                <ion-input type="number" formControlName="aggregateMarks"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Marking Scheme</ion-label>\n\n                <ion-select formControlName="markScheme">\n\n                  <ion-option *ngFor="let scheme of markScheme" [value]=scheme>{{scheme}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n      <ion-item-divider color="light">Guardian\'s Details</ion-item-divider>\n\n      <div formGroupName="guardian">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label>Name</ion-label>\n\n              <ion-input type="text" formControlName="name"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Relation</ion-label>\n\n              <ion-select type="text" formControlName="relation">\n\n                <ion-option *ngFor="let relation of guardianRelation" [value]=relation>{{relation}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Occupation</ion-label>\n\n              <ion-select type="text" formControlName="occupation">\n\n                <ion-option *ngFor="let occupation of guardianOccupation" [value]=occupation>{{occupation}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Phone Number</ion-label>\n\n              <ion-input type="number" formControlName="phoneNumber"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Email</ion-label>\n\n              <ion-input type="email" formControlName="email"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <ion-item-divider color="light">How did you hear about us?</ion-item-divider>\n\n      <div formGroupName= "marketing">\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Source</ion-label>\n\n                  <ion-select formControlName="source">\n\n                    <ion-option *ngFor="let source of enqSource" [value]=source>{{source}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Referred</ion-label>\n\n                  <ion-toggle formControlName="referred"></ion-toggle>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf = "inqForm.controls.marketing.controls.referred.value">\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Referrer Name</ion-label>\n\n                  <ion-input type="text" formControlName="referant"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n      </div>\n\n      <br>\n\n      <button ion-button full type="submit">Submit</button>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-details\inq-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_locality_locality__["a" /* LocalityProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_sort_sort__["a" /* SortProvider */], __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["a" /* CompleterService */]])
    ], InqDetailsPage);
    return InqDetailsPage;
}());

//# sourceMappingURL=inq-details.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalityProvider = (function () {
    function LocalityProvider(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9002/locality';
        console.log('Hello LocalityProvider Provider');
    }
    LocalityProvider.prototype.getLocality = function (pincode) {
        return this.http.get(this.baseUrl + '/pincode', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('pincode', pincode)
        });
    };
    LocalityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LocalityProvider);
    return LocalityProvider;
}());

//# sourceMappingURL=locality.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReminderProvider = (function () {
    function ReminderProvider(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.baseUrl = 'http://localhost:9002/reminder';
        console.log('Hello ReminderProvider Provider');
    }
    ReminderProvider.prototype.create = function (data) {
        return this.http.post(this.baseUrl + '/create', data);
    };
    ReminderProvider.prototype.update = function (data) {
        return this.http.post(this.baseUrl + '/update', data);
    };
    ReminderProvider.prototype.getReminderForToday = function () {
        var today = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
        return this.http.get(this.baseUrl + '/getByDate', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('from', today).set('to', today)
        });
    };
    ReminderProvider.prototype.getReminderForRange = function (from, to) {
        return this.http.get(this.baseUrl + '/getByDate', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('from', from).set('to', to)
        });
    };
    ReminderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], ReminderProvider);
    return ReminderProvider;
}());

//# sourceMappingURL=reminder.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reminder_reminder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReminderModalPage = (function () {
    function ReminderModalPage(navCtrl, navParams, view, formBuilder, reminderProvider, helper, notify) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.reminderProvider = reminderProvider;
        this.helper = helper;
        this.notify = notify;
        this.canEdit = true;
        this.reminderForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: [''],
            time: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.reminderId = this.navParams.get('id');
        if (this.navParams.get('view'))
            this.canEdit = false;
        this.patchForm();
    }
    ReminderModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReminderModalPage');
    };
    ReminderModalPage.prototype.logForm = function () {
        var _this = this;
        if (!this.currentReminder) {
            if (this.reminderForm.valid) {
                var request = this.reminderForm.value;
                console.log(request);
                this.reminderProvider.create(request)
                    .subscribe(function (data) {
                    var response = data;
                    if (response.data) {
                        _this.notify.showInfo("Reminder created successfully");
                        console.log("Reminder creation successful, the response data is:", data);
                    }
                    else if (response.exception) {
                        _this.notify.showError("Reminder creation failed");
                        console.log("Reminder creation failed, the response data is:", data);
                    }
                }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); }, function () {
                    console.log("Complete");
                    _this.view.dismiss(_this.reminderForm.value);
                });
            }
        }
        else if (this.currentReminder) {
            if (this.reminderForm.valid) {
                var request = this.reminderForm.value;
                request.id = this.currentReminder.id;
                console.log(request);
                this.reminderProvider.update(request)
                    .subscribe(function (data) {
                    var response = data;
                    if (response.data) {
                        _this.notify.showInfo("Reminder updated successfully");
                        console.log("Reminder updation successful, the response data is:", data);
                    }
                    else if (response.exception) {
                        _this.notify.showError("Reminder updation failed");
                        console.log("Reminder updation failed, the response data is:", data);
                    }
                }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); }, function () {
                    console.log("Complete");
                    _this.view.dismiss(_this.reminderForm.value);
                });
            }
        }
    };
    ReminderModalPage.prototype.closeModal = function () {
        this.view.dismiss(null);
    };
    ReminderModalPage.prototype.patchForm = function () {
        if (this.navParams.get('reminder')) {
            this.currentReminder = this.navParams.get('reminder');
            var patch = this.helper.removeEmptyFromObject(this.currentReminder);
            this.reminderForm.patchValue(patch);
        }
    };
    ReminderModalPage.prototype.toggleEdit = function () {
        this.canEdit = !this.canEdit;
    };
    ReminderModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reminder-modal',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\reminder-modal\reminder-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Reminder</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="closeModal()" ion-button>\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="canEdit" [formGroup]="reminderForm" (ngSubmit) = "logForm()">\n\n    <ion-item>\n\n      <ion-label stacked>Title</ion-label>\n\n      <ion-input formControlName="title" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Description</ion-label>\n\n      <ion-textarea formControlName="description"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Time</ion-label>\n\n      <ion-input formControlName="time" type="datetime-local"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button full type="submit">Submit</button>\n\n  </form>\n\n\n\n  <div *ngIf="!canEdit">\n\n    <p><b>Title</b> {{currentReminder?.title}}</p>\n\n    <p><b>Description</b> {{currentReminder?.description}}</p>\n\n    <p><b>Date</b> {{currentReminder?.time | date:"dd/MM/yyyy @ hh:mm a"}}</p>\n\n    <br>\n\n    <br>\n\n    <a (click)="toggleEdit()" pointer>Edit</a>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\reminder-modal\reminder-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_reminder_reminder__["a" /* ReminderProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */]])
    ], ReminderModalPage);
    return ReminderModalPage;
}());

//# sourceMappingURL=reminder-modal.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__follow_up_modal_follow_up_modal__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reminder_modal_reminder_modal__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InqSummaryPage = (function () {
    function InqSummaryPage(navCtrl, navParams, loadingCtrl, inqProvider, sort, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.inqProvider = inqProvider;
        this.sort = sort;
        this.modalCtrl = modalCtrl;
        this.currentInqId = this.navParams.data;
        this.getCurrentInq();
    }
    InqSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqSummaryPage');
    };
    InqSummaryPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqSummaryPage.prototype.getCurrentInq = function () {
        var _this = this;
        this.presentLoadingCustom();
        this.inqProvider.getInqById(this.currentInqId)
            .subscribe(function (data) {
            var responseData;
            responseData = data;
            _this.currentInq = responseData.data;
            if (responseData.data.followUps)
                _this.currentInqFollowUps = _this.sort.byString(responseData.data.followUps, 'followUpDate', 'descending');
            if (responseData.data.reminders)
                _this.currentInqReminders = _this.sort.byString(responseData.data.reminders, 'time', 'ascending');
            console.log("Inquiry to be viewed is: ", _this.currentInq);
        }, function (error) {
            console.log("GET unsuccessful, the server returned this error: ", error);
            _this.loading.dismissAll();
        }, function () {
            console.log("complete");
            _this.loading.dismissAll();
        });
    };
    InqSummaryPage.prototype.addFollowUp = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__follow_up_modal_follow_up_modal__["a" /* FollowUpModalPage */], { id: this.currentInq.id, name: this.currentInq.name });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    InqSummaryPage.prototype.updateFollowUp = function (followUp) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__follow_up_modal_follow_up_modal__["a" /* FollowUpModalPage */], { id: this.currentInq.id, name: this.currentInq.name, followUp: followUp });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    InqSummaryPage.prototype.showViewReminderModal = function (reminder) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__reminder_modal_reminder_modal__["a" /* ReminderModalPage */], { reminder: reminder, view: "true" });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    InqSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-summary',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-summary\inq-summary.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Summary</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item-divider>\n\n      <ion-row no-padding>\n\n        <ion-col col-2><h2><b>Inquiry #{{currentInq?.id}}</b></h2></ion-col>\n\n        <ion-col col-2><h2><b>Status: {{currentInq?.inquiryStatus}}</b></h2></ion-col>\n\n        <ion-col><h2><b>Course Interested In: {{currentInq?.areaOfInterest}}</b></h2></ion-col>\n\n        <ion-col><h2><b>Course Offered: {{currentInq?.courseOffered?currentInq?.courseOffered:"N/A"}}</b></h2></ion-col>\n\n      </ion-row>\n\n    </ion-item-divider>\n\n    <ion-card-content>\n\n      <ion-row no-padding>\n\n        <ion-col>\n\n          <p>Name: {{currentInq?.name}}</p>\n\n          <p>Mobile No.: +91-{{currentInq?.mobile}}</p>\n\n          <P>Email: {{currentInq?.email}}</P>\n\n          <p>Gender: {{currentInq?.gender}}</p>\n\n          <p>DOB: {{currentInq?.dob | date: "dd/MM/yyyy"}}</p>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>Education: {{currentInq?.education[0]?.educationQualification?currentInq.education[0].educationQualification:"N/A"}}</p>\n\n          <p>Stream: {{currentInq?.education[0]?.stream?currentInq.education[0].stream:"N/A"}}</p>\n\n          <p>Year: {{currentInq?.education[0]?.year?currentInq.education[0].year:"N/A"}}</p>\n\n          <p>Computer Knowledge: {{currentInq?.computerKnowledge}}</p>\n\n          <p>Course Interested In: {{currentInq?.areaOfInterest}}</p>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>Guardian Name: {{currentInq?.guardian?.name?currentInq?.guardian.name:"N/A"}}</p>\n\n          <p>Relation: {{currentInq?.guardian?.relation?currentInq?.guardian.relation:"N/A"}}</p>\n\n          <p>Mobile No.: {{currentInq?.guardian?.phoneNumber?"+91-"+currentInq?.guardian.phoneNumber:"N/A"}}</p>\n\n          <p>Email: {{currentInq?.guardian?.email?currentInq?.guardian.email:"N/A"}}</p>\n\n          <p>Occupation: {{currentInq?.guardian?.occupation?currentInq?.guardian.occupation:"N/A"}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row no-padding>\n\n        <ion-col>\n\n          <p>Address: {{currentInq?.address.addressLine1 | titlecase}}{{currentInq?.address.addressLine1?",":""}} {{currentInq?.address.area | titlecase}}, {{currentInq?.address.city | titlecase}}, {{currentInq?.address.state | titlecase}}, {{currentInq?.address.country | titlecase}}, {{currentInq?.address.pin}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngIf="currentInqReminders">\n\n    <ion-card-content>\n\n      <div class="reminder-container">\n\n        <h2><b>Reminders </b></h2>\n\n        <p *ngFor="let reminder of currentInqReminders; let i = index" (click)="showViewReminderModal(reminder)"  pointer>{{i+1}}. {{reminder.title}}</p>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item-divider>\n\n      <ion-row no-padding>\n\n        <ion-col class="follow-up-heading"><h2><b>Follow Ups</b></h2></ion-col>\n\n        <ion-col text-right>\n\n            <button (click)="addFollowUp()" ion-button clear small color="danger" icon-start>\n\n              <ion-icon name=\'add\'></ion-icon>\n\n              Add Follow Up\n\n            </button>\n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-item-divider>\n\n    <ion-card-content *ngIf="!currentInqFollowUps"><br><h2 text-center>No follow ups available</h2></ion-card-content>\n\n    <ion-card-content *ngIf="currentInqFollowUps">\n\n      <ion-card *ngFor="let followUp of currentInqFollowUps; let i = index;">\n\n          <ion-item-divider color="light">\n\n            <ion-row no-padding>\n\n              <ion-col><h3 (click)="updateFollowUp(followUp)" pointer><b>Follow Up #{{currentInqFollowUps.length-i}}</b></h3></ion-col>\n\n              <ion-col><h3><b>Done On: {{followUp?.followUpDate | date : "dd/MM/yyyy"}}</b></h3></ion-col>\n\n              <ion-col><h3><b>Course Offered: N/A</b></h3></ion-col>\n\n            </ion-row>\n\n          </ion-item-divider>\n\n          <ion-card-content>\n\n            <br>\n\n            <p><b>Status:</b>&nbsp;{{followUp?.followUpStatus}}</p>\n\n            <p><b>Sub Status:</b>&nbsp;{{followUp?.subStatus}}</p>\n\n            <p><b>Remark:</b>&nbsp;{{followUp?.remark}}</p>\n\n            <!-- <p><b>Next Follow Up On:</b>&nbsp;10/01/2018 @ 3 PM</p> -->\n\n          </ion-card-content>\n\n      </ion-card>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-summary\inq-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sort_sort__["a" /* SortProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], InqSummaryPage);
    return InqSummaryPage;
}());

//# sourceMappingURL=inq-summary.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowUpModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_follow_up_follow_up__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper_helper__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FollowUpModalPage = (function () {
    function FollowUpModalPage(navCtrl, navParams, view, formBuilder, followUpProvider, notify, message, datePipe, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.followUpProvider = followUpProvider;
        this.notify = notify;
        this.message = message;
        this.datePipe = datePipe;
        this.helper = helper;
        this.followUpForm = this.formBuilder.group({
            followUpType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            followUpStatus: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            remark: [''],
            caseIndex: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            subStatus: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.inquiryId = this.navParams.get('id');
        this.inquiryName = this.navParams.get('name');
        this.patchForm();
        this.setEnums();
        this.setFollowUpStatus();
        this.setSubStatus();
        this.setFollowUpType();
        this.setCaseIndex();
    }
    FollowUpModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowUpModalPage');
    };
    FollowUpModalPage.prototype.logForm = function () {
        var _this = this;
        if (!this.currentFollowUp) {
            if (this.followUpForm.valid) {
                var request = this.followUpForm.value;
                request.inquiryId = this.inquiryId;
                request.followUpDate = this.getToday();
                console.log(request);
                this.followUpProvider.create(request)
                    .subscribe(function (data) {
                    var response = data;
                    if (response.data) {
                        _this.notify.showInfo("Follow up created successfully");
                        console.log("Follow up creation successful, the response data is:", data);
                    }
                    else if (response.exception) {
                        _this.notify.showError("Follow up creation failed");
                        console.log("Follow up creation failed, the response data is:", data);
                    }
                }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); }, function () {
                    console.log("Complete");
                    _this.view.dismiss(_this.followUpForm.value);
                });
            }
        }
        else if (this.currentFollowUp) {
            if (this.followUpForm.valid) {
                var request = this.followUpForm.value;
                request.id = this.currentFollowUp.id;
                request.inquiryId = this.inquiryId;
                request.followUpDate = this.getToday();
                console.log(request);
                this.followUpProvider.update(request)
                    .subscribe(function (data) {
                    var response = data;
                    if (response.data) {
                        _this.notify.showInfo("Follow up updated successfully");
                        console.log("Follow up updation successful, the response data is:", data);
                    }
                    else if (response.exception) {
                        _this.notify.showError("Follow up updation failed");
                        console.log("Follow up updation failed, the response data is:", data);
                    }
                }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); }, function () {
                    console.log("Complete");
                    _this.view.dismiss(_this.followUpForm.value);
                });
            }
        }
    };
    FollowUpModalPage.prototype.patchForm = function () {
        if (this.navParams.get('followUp')) {
            this.currentFollowUp = this.navParams.get('followUp');
            var patch = this.helper.removeEmptyFromObject(this.currentFollowUp);
            this.followUpForm.patchValue(patch);
        }
    };
    FollowUpModalPage.prototype.closeModal = function () {
        this.view.dismiss(null);
    };
    FollowUpModalPage.prototype.getToday = function () {
        return this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    };
    FollowUpModalPage.prototype.setEnums = function () {
        this.enums = this.followUpProvider.getEnums();
    };
    FollowUpModalPage.prototype.setFollowUpStatus = function () {
        this.followUpStatus = this.enums.data.followUpStatus;
    };
    FollowUpModalPage.prototype.setSubStatus = function () {
        this.subStatus = this.enums.data.followUpSubStatus;
    };
    FollowUpModalPage.prototype.setFollowUpType = function () {
        this.followUpType = this.enums.data.followUpType;
    };
    FollowUpModalPage.prototype.setCaseIndex = function () {
        this.caseIndex = this.enums.data.caseIndex;
    };
    FollowUpModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-follow-up-modal',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\follow-up-modal\follow-up-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Follow Up</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="closeModal()" ion-button>\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col><h6>Inquiry#: {{inquiryId}}</h6></ion-col>\n\n    <ion-col><h6>Name: {{inquiryName}}</h6></ion-col>\n\n  </ion-row>\n\n  <form [formGroup]="followUpForm" (ngSubmit)="logForm()">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label stacked>Type</ion-label>\n\n          <ion-select formControlName="followUpType" interface="popover">\n\n            <ion-option *ngFor="let type of followUpType" [value]=type>{{type}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label stacked>Interest Level</ion-label>\n\n          <ion-select formControlName="caseIndex" interface="popover">\n\n            <ion-option *ngFor="let ci of caseIndex" [value]="ci.value">{{ci.value}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item>\n\n      <ion-label stacked>Status</ion-label>\n\n      <ion-select formControlName="followUpStatus" interface="popover">\n\n        <ion-option *ngFor="let status of followUpStatus" [value]=status>{{status}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Substatus</ion-label>\n\n      <ion-select formControlName="subStatus" interface="popover">\n\n        <ion-option *ngFor="let subStatus of subStatus" [value]=subStatus>{{subStatus}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Remarks</ion-label>\n\n      <ion-textarea formControlName="remark" class="remark-textarea"></ion-textarea>\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button full type="submit">Submit</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\follow-up-modal\follow-up-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_follow_up_follow_up__["a" /* FollowUpProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_7__providers_helper_helper__["a" /* HelperProvider */]])
    ], FollowUpModalPage);
    return FollowUpModalPage;
}());

//# sourceMappingURL=follow-up-modal.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqFormPersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_locality_locality__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inq_form_education_guardian_inq_form_education_guardian__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InqFormPersonalPage = (function () {
    function InqFormPersonalPage(navCtrl, navParams, formBuilder, loadingCtrl, inqProvider, notify, message, localityProvider, helper, sort, completerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.inqProvider = inqProvider;
        this.notify = notify;
        this.message = message;
        this.localityProvider = localityProvider;
        this.helper = helper;
        this.sort = sort;
        this.completerService = completerService;
        this.today = new Date().toISOString();
        this.activeMenu = "visitor";
        this.inqForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            address: this.formBuilder.group({
                addressLine1: [''],
                locationId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                pin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
            }),
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]],
            hQualification: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            computerKnowledge: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            areaOfInterest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.helper.setActiveMenu(this.activeMenu);
        this.setEnums();
        this.setGenders();
        this.setQualifications();
        this.setComputerKnowledge();
        this.setAreasOfInterest();
        this.diffState = false;
        this.pinService = this.completerService.remote(null);
        this.pinService.urlFormater(function (term) {
            return "http://localhost:9002/pincodes?pincode=" + term;
        });
        this.pinService.dataField("data");
    }
    InqFormPersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqFormPersonalPage');
    };
    InqFormPersonalPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqFormPersonalPage.prototype.logForm1 = function () {
        var _this = this;
        if (this.inqForm.valid) {
            console.log("Form to be logged", this.inqForm.value);
            this.presentLoadingCustom();
            this.inqProvider.createInq(this.inqForm.value)
                .subscribe(function (data) {
                _this.responseData = data;
                if (_this.responseData.data) {
                    _this.notify.showInfo(_this.message.INQUIRY.REGISTER.SUCCESS);
                    console.log("POST successful, the response data is:", data);
                }
                else {
                    _this.notify.showError(_this.message.INQUIRY.REGISTER.FAILURE);
                    console.log("POST unsucessful, server responded with error", _this.responseData.exception);
                }
            }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); _this.loading.dismissAll(); }, function () {
                console.log("complete");
                _this.loading.dismissAll();
                if (_this.responseData.data) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__inq_form_education_guardian_inq_form_education_guardian__["a" /* InqFormEducationGuardianPage */], { data: _this.responseData });
                }
            });
        }
        else {
            this.notify.showError(this.message.FORM.INVALID);
            console.log(this.inqForm);
            this.helper.markInvalidFields(this.inqForm);
            this.helper.markInvalidSelect(this.inqForm, 'gender');
            this.helper.markInvalidSelect(this.inqForm, 'dob');
            this.helper.markInvalidSelect(this.inqForm, 'hQualification');
            this.helper.markInvalidSelect(this.inqForm, 'computerKnowledge');
            this.helper.markInvalidSelect(this.inqForm, 'areaOfInterest');
            if (this.areas && this.inqForm.value.address.pin.length == 6)
                this.helper.markInvalidSelect(this.inqForm.get('address'), 'locationId');
        }
    };
    InqFormPersonalPage.prototype.changeState = function () {
        this.diffState = !this.diffState;
    };
    InqFormPersonalPage.prototype.setLocality = function (locality) {
        this.city = locality.data.city;
        this.state = locality.data.state;
        this.country = locality.data.country;
        this.areas = this.sort.byString(locality.data.locality, 'name', 'ascending');
    };
    InqFormPersonalPage.prototype.getLocality = function (pincode) {
        var _this = this;
        console.log("Getting localities for: ", pincode);
        this.localityProvider.getLocality(pincode)
            .subscribe(function (data) { console.log(data), _this.localities = data; }, function (error) { console.log("ERROR GETTING LOCALITIES"); }, function () { console.log("COMPLETE"), _this.setLocality(_this.localities); });
    };
    InqFormPersonalPage.prototype.onPincodeSelected = function (pincode) {
        if (pincode) {
            console.log(pincode);
            this.getLocality(pincode.originalObject);
        }
    };
    InqFormPersonalPage.prototype.setPincodeFieldTypeNumber = function () {
        document.getElementById('completer-input').setAttribute('type', 'number');
    };
    InqFormPersonalPage.prototype.setEnums = function () {
        this.enums = this.inqProvider.getEnums();
    };
    InqFormPersonalPage.prototype.setGenders = function () {
        this.genders = this.enums.data.gender;
    };
    InqFormPersonalPage.prototype.setQualifications = function () {
        this.hQualifications = this.enums.data.highestEducation;
    };
    InqFormPersonalPage.prototype.setComputerKnowledge = function () {
        this.computerKnowledge = this.enums.data.computerKnowledge;
    };
    InqFormPersonalPage.prototype.setAreasOfInterest = function () {
        this.areasOfInterest = this.enums.data.areaOfInterest;
    };
    InqFormPersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-form-personal',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-personal\inq-form-personal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Inquiry Form</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="inqForm" (ngSubmit)="logForm1()">\n\n    <ion-grid>\n\n      <ion-item-divider color="light">Personal Details</ion-item-divider>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Mobile No.</ion-label>>\n\n            <ion-input type="number" formControlName="mobile" min="0"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Email</ion-label>\n\n            <ion-input type="email" formControlName="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Gender</ion-label>\n\n            <ion-select formControlName="gender">\n\n              <ion-option *ngFor="let gender of genders" [value]=gender>{{gender}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Date of Birth</ion-label>\n\n            <ion-datetime displayFormat="D MMM YYYY" pickerFormat="D MMM YYYY" min = "1900" [max] = "today" formControlName="dob"></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Education</ion-label>\n\n            <ion-select formControlName="hQualification">\n\n              <ion-option *ngFor="let qualification of hQualifications" [value]=qualification>{{qualification}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Computer Knowledge</ion-label>\n\n            <ion-select formControlName="computerKnowledge">\n\n              <ion-option *ngFor="let knowledge of computerKnowledge" [value]=knowledge>{{knowledge}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>Course Interested In</ion-label>\n\n            <ion-select formControlName="areaOfInterest">\n\n              <ion-option *ngFor="let areaOfInterest of areasOfInterest" [value]=areaOfInterest>{{areaOfInterest}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider color="light">Address\n\n      </ion-item-divider>\n\n      <ion-row formGroupName="address">\n\n        <ion-col no-padding>\n\n          <ion-row>\n\n            <ion-col col-3 class="pin-autocomplete">\n\n              <ion-label>Pincode</ion-label>\n\n              <ng2-completer class="completer-limit" formControlName="pin" (focus)="setPincodeFieldTypeNumber()" (selected)="onPincodeSelected($event)" [datasource]="pinService" [minSearchLength]="3" [placeholder]="\'Enter the first 3 digits to search\'" [maxChars]="6" [clearUnselected]="true" [autoMatch]="true" [inputId]="\'completer-input\'"></ng2-completer>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="areas && inqForm.value.address.pin.length == 6">\n\n            <ion-col col-3>\n\n              <ion-item>\n\n                <ion-label floating>Area</ion-label>\n\n                <ion-select formControlName="locationId">\n\n                  <ion-option *ngFor="let area of areas" [value]=area.id>{{area.name | titlecase}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label floating>City</ion-label>\n\n                <ion-input type="text" readonly="true" value="{{city | titlecase}}, {{state | titlecase}}, {{country | titlecase}}"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="areas">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Street</ion-label>\n\n                <ion-input type="text" formControlName="addressLine1"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <button ion-button full type="submit">Submit</button>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-personal\inq-form-personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_locality_locality__["a" /* LocalityProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_sort_sort__["a" /* SortProvider */], __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["a" /* CompleterService */]])
    ], InqFormPersonalPage);
    return InqFormPersonalPage;
}());

//# sourceMappingURL=inq-form-personal.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__counselor_home_home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visitor_inq_form_personal_inq_form_personal__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, auth, formBuilder) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.isLogin = false;
        this.loginForm = this.formBuilder.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    HomePage.prototype.login = function () {
        if (this.auth.login(this.loginForm.value.id, this.loginForm.value.password)) {
            this.goToCounselorDash();
        }
    };
    HomePage.prototype.goToCounselorDash = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__counselor_home_home__["a" /* CounselorDashboardPage */], {}, { animate: true, direction: 'forward' });
    };
    HomePage.prototype.goToVisitorPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__visitor_inq_form_personal_inq_form_personal__["a" /* InqFormPersonalPage */], {}, { animate: true, direction: 'forward' });
    };
    HomePage.prototype.toggleLogin = function () {
        this.isLogin = !this.isLogin;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>  \n\n  <section class="login">\n\n    <div class="login-button-group">\n\n      <button (click)="goToVisitorPage()" outline large ion-button color="light">VISITOR</button>\n\n      <div class="login-button-seperator">- OR -</div>\n\n      <button (click)="toggleLogin()" *ngIf="!isLogin" outline small ion-button color="light">LOGIN</button>\n\n      <form *ngIf="isLogin" [formGroup]="loginForm" (ngSubmit)="login()">\n\n        <label for=\'username\'>Username</label>\n\n        <input formControlName="id" id=\'username\' type=\'text\'>\n\n        <label for=\'password\'>Password</label>\n\n        <input formControlName="password" id=\'password\' type=\'password\'>\n\n        <button class="dash-login" type="submit" *ngIf="isLogin" outline small ion-button color="light">LOGIN</button>\n\n      </form>\n\n    </div>\n\n  </section>\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqCloseModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_follow_up_follow_up__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InqCloseModalPage = (function () {
    function InqCloseModalPage(navCtrl, navParams, view, formBuilder, followUpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.followUpProvider = followUpProvider;
        this.inqCloseForm = this.formBuilder.group({
            closingStatus: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            closingSubStatus: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            closingRemark: ['']
        });
        this.setEnums();
        this.setClosingStatus();
        this.setClosingSubStatus();
    }
    InqCloseModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqCloseModalPage');
    };
    InqCloseModalPage.prototype.closeInquiry = function () {
        if (this.inqCloseForm.valid) {
            console.log(this.inqCloseForm.value);
            this.view.dismiss(this.inqCloseForm.value);
        }
    };
    InqCloseModalPage.prototype.closeModal = function () {
        this.view.dismiss(null);
    };
    InqCloseModalPage.prototype.setEnums = function () {
        this.enums = this.followUpProvider.getEnums();
    };
    InqCloseModalPage.prototype.setClosingStatus = function () {
        this.closingStatus = this.enums.data.followUpStatus;
    };
    InqCloseModalPage.prototype.setClosingSubStatus = function () {
        this.closingSubStatus = this.enums.data.followUpSubStatus;
    };
    InqCloseModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-close-modal',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-close-modal\inq-close-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Closing Inquiry</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="closeModal()" ion-button>\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="inqCloseForm" (ngSubmit)="closeInquiry()">\n\n    <ion-item>\n\n      <ion-label stacked>Status</ion-label>\n\n      <ion-select formControlName="closingStatus" interface="popover">\n\n        <ion-option *ngFor="let status of closingStatus" [value]=status>{{status}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Substatus</ion-label>\n\n      <ion-select formControlName="closingSubStatus" interface="popover">\n\n        <ion-option *ngFor="let subStatus of closingSubStatus" [value]=subStatus>{{subStatus}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Remarks</ion-label>\n\n      <ion-textarea formControlName="closingRemark" class="remark-textarea"></ion-textarea>\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button full type="submit">Close Inquiry</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-close-modal\inq-close-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_follow_up_follow_up__["a" /* FollowUpProvider */]])
    ], InqCloseModalPage);
    return InqCloseModalPage;
}());

//# sourceMappingURL=inq-close-modal.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteProvider = (function () {
    function QuoteProvider(http) {
        this.http = http;
        this.quotes = [
            {
                "quote": "Life isn’t about getting and having, it’s about giving and being.",
                "name": "Kevin Kruse"
            },
            {
                "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
                "name": "Napoleon Hill"
            },
            {
                "quote": "Strive not to be a success, but rather to be of value.",
                "name": "Albert Einstein"
            },
            {
                "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
                "name": "Robert Frost"
            },
            {
                "quote": "I attribute my success to this: I never gave or took any excuse.",
                "name": "Florence Nightingale"
            },
            {
                "quote": "You miss 100% of the shots you don’t take.",
                "name": "Wayne Gretzky"
            },
            {
                "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
                "name": "Michael Jordan"
            },
            {
                "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
                "name": "Amelia Earhart"
            },
            {
                "quote": "Every strike brings me closer to the next home run.",
                "name": "Babe Ruth"
            },
            {
                "quote": "Definiteness of purpose is the starting point of all achievement.",
                "name": "W. Clement Stone"
            },
            {
                "quote": "We must balance conspicuous consumption with conscious capitalism.",
                "name": "Kevin Kruse"
            },
            {
                "quote": "Life is what happens to you while you’re busy making other plans.",
                "name": "John Lennon"
            },
            {
                "quote": "We become what we think about.",
                "name": "Earl Nightingale"
            },
            {
                "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
                "name": "Mark Twain"
            },
            {
                "quote": "Life is 10% what happens to me and 90% of how I react to it.",
                "name": "Charles Swindoll"
            },
            {
                "quote": "The most common way people give up their power is by thinking they don’t have any.",
                "name": "Alice Walker"
            },
            {
                "quote": "The mind is everything. What you think you become.",
                "name": "Buddha"
            },
            {
                "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
                "name": "Chinese Proverb"
            },
            {
                "quote": "An unexamined life is not worth living.",
                "name": "Socrates"
            },
            {
                "quote": "Eighty percent of success is showing up.",
                "name": "Woody Allen"
            },
            {
                "quote": "Your time is limited, so don’t waste it living someone else’s life.",
                "name": "Steve Jobs"
            },
            {
                "quote": "Winning isn’t everything, but wanting to win is.",
                "name": "Vince Lombardi"
            },
            {
                "quote": "I am not a product of my circumstances. I am a product of my decisions.",
                "name": "Stephen Covey"
            },
            {
                "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
                "name": "Pablo Picasso"
            },
            {
                "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
                "name": "Christopher Columbus"
            },
            {
                "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                "name": "Maya Angelou"
            },
            {
                "quote": "Either you run the day, or the day runs you.",
                "name": "Jim Rohn"
            },
            {
                "quote": "Whether you think you can or you think you can’t, you’re right.",
                "name": "Henry Ford"
            },
            {
                "quote": "The two most important days in your life are the day you are born and the day you find out why.",
                "name": "Mark Twain"
            },
            {
                "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
                "name": "Johann Wolfgang von Goethe"
            },
            {
                "quote": "The best revenge is massive success.",
                "name": "Frank Sinatra"
            },
            {
                "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
                "name": "Zig Ziglar"
            },
            {
                "quote": "Life shrinks or expands in proportion to one’s courage.",
                "name": "Anais Nin"
            },
            {
                "quote": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
                "name": "Vincent Van Gogh"
            },
            {
                "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
                "name": "Aristotle"
            },
            {
                "quote": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
                "name": "Jesus"
            },
            {
                "quote": "The only person you are destined to become is the person you decide to be.",
                "name": "Ralph Waldo Emerson"
            },
            {
                "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.",
                "name": "Henry David Thoreau"
            },
            {
                "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
                "name": "Erma Bombeck"
            },
            {
                "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
                "name": "Booker T. Washington"
            },
            {
                "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
                "name": "Ancient Indian Proverb"
            },
            {
                "quote": "Believe you can and you’re halfway there.",
                "name": "Theodore Roosevelt"
            },
            {
                "quote": "Everything you’ve ever wanted is on the other side of fear.",
                "name": "George Addair"
            },
            {
                "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
                "name": "Plato"
            },
            {
                "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
                "name": "Maimonides"
            },
            {
                "quote": "Start where you are. Use what you have.  Do what you can.",
                "name": "Arthur Ashe"
            },
            {
                "quote": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
                "name": "John Lennon"
            },
            {
                "quote": "Fall seven times and stand up eight.",
                "name": "Japanese Proverb"
            },
            {
                "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
                "name": "Helen Keller"
            },
            {
                "quote": "Everything has beauty, but not everyone can see.",
                "name": "Confucius"
            },
            {
                "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
                "name": "Anne Frank"
            },
            {
                "quote": "When I let go of what I am, I become what I might be.",
                "name": "Lao Tzu"
            },
            {
                "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
                "name": "Maya Angelou"
            },
            {
                "quote": "Happiness is not something readymade.  It comes from your own actions.",
                "name": "Dalai Lama"
            },
            {
                "quote": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
                "name": "Sheryl Sandberg"
            },
            {
                "quote": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
                "name": "Aristotle"
            },
            {
                "quote": "If the wind will not serve, take to the oars.",
                "name": "Latin Proverb"
            },
            {
                "quote": "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
                "name": "Unknown"
            },
            {
                "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
                "name": "Marie Curie"
            },
            {
                "quote": "Too many of us are not living our dreams because we are living our fears.",
                "name": "Les Brown"
            },
            {
                "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
                "name": "Joshua J. Marine"
            },
            {
                "quote": "If you want to lift yourself up, lift up someone else.",
                "name": "Booker T. Washington"
            },
            {
                "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
                "name": "Leonardo da Vinci"
            },
            {
                "quote": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
                "name": "Jamie Paolinetti"
            },
            {
                "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
                "name": "Erica Jong"
            },
            {
                "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
                "name": "Bob Dylan"
            },
            {
                "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.",
                "name": "Benjamin Franklin"
            },
            {
                "quote": "In order to succeed, your desire for success should be greater than your fear of failure.",
                "name": "Bill Cosby"
            },
            {
                "quote": "A person who never made a mistake never tried anything new.",
                "name": "Albert Einstein"
            },
            {
                "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
                "name": "Chinese Proverb"
            },
            {
                "quote": "There are no traffic jams along the extra mile.",
                "name": "Roger Staubach"
            },
            {
                "quote": "It is never too late to be what you might have been.",
                "name": "George Eliot"
            },
            {
                "quote": "You become what you believe.",
                "name": "Oprah Winfrey"
            },
            {
                "quote": "I would rather die of passion than of boredom.",
                "name": "Vincent van Gogh"
            },
            {
                "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
                "name": "Unknown"
            },
            {
                "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
                "name": "Ann Landers"
            },
            {
                "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
                "name": "Abigail Van Buren"
            },
            {
                "quote": "Build your own dreams, or someone else will hire you to build theirs.",
                "name": "Farrah Gray"
            },
            {
                "quote": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
                "name": "Jesse Owens"
            },
            {
                "quote": "Education costs money.  But then so does ignorance.",
                "name": "Sir Claus Moser"
            },
            {
                "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
                "name": "Rosa Parks"
            },
            {
                "quote": "It does not matter how slowly you go as long as you do not stop.",
                "name": "Confucius"
            },
            {
                "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
                "name": "Oprah Winfrey"
            },
            {
                "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
                "name": "Dalai Lama"
            },
            {
                "quote": "You can’t use up creativity.  The more you use, the more you have.",
                "name": "Maya Angelou"
            },
            {
                "quote": "Dream big and dare to fail.",
                "name": "Norman Vaughan"
            },
            {
                "quote": "Our lives begin to end the day we become silent about things that matter.",
                "name": "Martin Luther King Jr."
            },
            {
                "quote": "Do what you can, where you are, with what you have.",
                "name": "Teddy Roosevelt"
            },
            {
                "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
                "name": "Tony Robbins"
            },
            {
                "quote": "Dreaming, after all, is a form of planning.",
                "name": "Gloria Steinem"
            },
            {
                "quote": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
                "name": "Mae Jemison"
            },
            {
                "quote": "You may be disappointed if you fail, but you are doomed if you don’t try.",
                "name": "Beverly Sills"
            },
            {
                "quote": "Remember no one can make you feel inferior without your consent.",
                "name": "Eleanor Roosevelt"
            },
            {
                "quote": "Life is what we make it, always has been, always will be.",
                "name": "Grandma Moses"
            },
            {
                "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
                "name": "Ayn Rand"
            },
            {
                "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
                "name": "Henry Ford"
            },
            {
                "quote": "It’s not the years in your life that count. It’s the life in your years.",
                "name": "Abraham Lincoln"
            },
            {
                "quote": "Change your thoughts and you change your world.",
                "name": "Norman Vincent Peale"
            },
            {
                "quote": "Either write something worth reading or do something worth writing.",
                "name": "Benjamin Franklin"
            },
            {
                "quote": "Nothing is impossible, the word itself says, “I’m possible!”",
                "name": "–Audrey Hepburn"
            },
            {
                "quote": "The only way to do great work is to love what you do.",
                "name": "Steve Jobs"
            },
            {
                "quote": "If you can dream it, you can achieve it.",
                "name": "Zig Ziglar"
            }
        ];
        console.log('Hello QuoteProvider Provider');
    }
    QuoteProvider.prototype.getQuote = function () {
        return this.quotes[Math.floor(Math.random() * (this.quotes.length - 1))];
    };
    QuoteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], QuoteProvider);
    return QuoteProvider;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqFormEducationGuardianPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inq_form_marketing_inq_form_marketing__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InqFormEducationGuardianPage = (function () {
    function InqFormEducationGuardianPage(navCtrl, navParams, formBuilder, loadingCtrl, inqProvider, notify, message, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.inqProvider = inqProvider;
        this.notify = notify;
        this.message = message;
        this.helper = helper;
        this.currentInq = this.navParams.get('data');
        this.education = this.currentInq.data.hQualification;
        this.inqForm = this.formBuilder.group({
            education: this.formBuilder.array([
                this.formBuilder.group({
                    educationQualification: [this.education, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                    instituteName: [''],
                    stream: [''],
                    status: [''],
                    year: [''],
                    type: [''],
                    aggregateMarks: [''],
                    markScheme: ['']
                })
            ]),
            guardian: this.formBuilder.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                relation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                phoneNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]],
                email: ['', this.helper.emailOrEmptyValidator],
                occupation: ['']
            })
        });
        this.setEnums();
        this.setQualifications();
        this.setStreams();
        this.setEduStatus();
        this.setEduType();
        this.setMarkScheme();
        this.setGuardianRelation();
        this.setGuardinaOccupation();
    }
    InqFormEducationGuardianPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqFormEducationGuardianPage');
    };
    InqFormEducationGuardianPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqFormEducationGuardianPage.prototype.logForm2 = function () {
        var _this = this;
        if (this.inqForm.valid) {
            this.requestData = Object.assign({}, this.currentInq.data, this.inqForm.value);
            console.log("Form to be logged", this.requestData);
            this.presentLoadingCustom();
            this.inqProvider.updateInq(this.requestData)
                .subscribe(function (data) {
                _this.responseData = data;
                if (_this.responseData.data) {
                    _this.notify.showInfo(_this.message.INQUIRY.UPDATE.SUCCESS);
                    console.log("POST successful, the response data is:", data);
                }
                else {
                    _this.notify.showError(_this.message.INQUIRY.UPDATE.FAILURE);
                    console.log("POST unsucessful, server responded with error", _this.responseData.exception);
                }
            }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); _this.loading.dismissAll(); }, function () {
                console.log("complete");
                _this.loading.dismissAll();
                if (_this.responseData.data) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__inq_form_marketing_inq_form_marketing__["a" /* InqFormMarketingPage */], { data: _this.responseData });
                }
            });
        }
        else {
            this.notify.showError(this.message.FORM.INVALID);
            console.log(this.inqForm);
            this.helper.markInvalidFields(this.inqForm);
            var educationFormGroup = this.inqForm.get('education');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'educationQualification');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'stream');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'status');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'type');
            this.helper.markInvalidSelect(educationFormGroup.at(0), 'markScheme');
            this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'relation');
            this.helper.markInvalidSelect(this.inqForm.get('guardian'), 'occupation');
        }
    };
    InqFormEducationGuardianPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__inq_form_marketing_inq_form_marketing__["a" /* InqFormMarketingPage */], { data: this.currentInq });
    };
    InqFormEducationGuardianPage.prototype.setEnums = function () {
        this.enums = this.inqProvider.getEnums();
    };
    InqFormEducationGuardianPage.prototype.setQualifications = function () {
        this.hQualifications = this.enums.data.highestEducation;
    };
    InqFormEducationGuardianPage.prototype.setStreams = function () {
        this.streams = this.enums.data.stream;
    };
    InqFormEducationGuardianPage.prototype.setEduStatus = function () {
        this.eduStatus = this.enums.data.educationStatus;
    };
    InqFormEducationGuardianPage.prototype.setEduType = function () {
        this.eduType = this.enums.data.educationType;
    };
    InqFormEducationGuardianPage.prototype.setMarkScheme = function () {
        this.markScheme = this.enums.data.markScheme;
    };
    InqFormEducationGuardianPage.prototype.setGuardianRelation = function () {
        this.guardianRelation = this.enums.data.relation;
    };
    InqFormEducationGuardianPage.prototype.setGuardinaOccupation = function () {
        this.guardianOccupation = this.enums.data.occupation;
    };
    InqFormEducationGuardianPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-form-education-guardian',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-education-guardian\inq-form-education-guardian.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Hi Anon! Please provide additional details while you wait...</ion-title>\n\n    <ion-buttons end>\n\n      <p class="form-number">2 of 3</p>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="inqForm" (ngSubmit)="logForm2()">\n\n    <ion-grid>\n\n      <ion-item-divider color="light">Additional Education Details</ion-item-divider>\n\n      <div formArrayName="education" *ngFor="let item of inqForm.get(\'education\').controls; let i = index;">\n\n        <div [formGroupName]="i">\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Qualification</ion-label>\n\n                <ion-select formControlName="educationQualification">\n\n                  <ion-option *ngFor="let qualification of hQualifications" [value]=qualification>{{qualification}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Stream</ion-label>\n\n                <ion-select formControlName="stream">\n\n                  <ion-option *ngFor="let stream of streams" [value]=stream>{{stream}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Year of Completion</ion-label>\n\n                <ion-input type="number" formControlName="year"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Institute</ion-label>\n\n                <ion-input type="text" formControlName="instituteName"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Education Status</ion-label>\n\n                <ion-select formControlName="status">\n\n                  <ion-option *ngFor="let status of eduStatus" [value]=status>{{status}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Education Type</ion-label>\n\n                <ion-select formControlName="type">\n\n                  <ion-option *ngFor="let type of eduType" [value]=type>{{type}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Marks</ion-label>\n\n                <ion-input type="number" formControlName="aggregateMarks"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label>Marking Scheme</ion-label>\n\n                <ion-select formControlName="markScheme">\n\n                  <ion-option *ngFor="let scheme of markScheme" [value]=scheme>{{scheme}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n      <ion-item-divider color="light">Guardian\'s Details</ion-item-divider>\n\n      <div formGroupName="guardian">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label>Name</ion-label>\n\n              <ion-input type="text" formControlName="name"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Relation</ion-label>\n\n              <ion-select type="text" formControlName="relation">\n\n                <ion-option *ngFor="let relation of guardianRelation" [value]=relation>{{relation}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Occupation</ion-label>\n\n              <ion-select type="text" formControlName="occupation">\n\n                <ion-option *ngFor="let occupation of guardianOccupation" [value]=occupation>{{occupation}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Phone Number</ion-label>\n\n              <ion-input type="number" formControlName="phoneNumber"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label>Email</ion-label>\n\n              <ion-input type="email" formControlName="email"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <button ion-button full type="submit">Submit</button>\n\n    </ion-grid>\n\n  </form>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-buttons end>\n\n          <button ion-button clear class="skip-button" (click)="skip()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-education-guardian\inq-form-education-guardian.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_inq_inq__["a" /* InqProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_inq_inq__["a" /* InqProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__["a" /* HelperProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__["a" /* HelperProvider */]) === "function" && _h || Object])
    ], InqFormEducationGuardianPage);
    return InqFormEducationGuardianPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=inq-form-education-guardian.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqFormMarketingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__thankyou_thankyou__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InqFormMarketingPage = (function () {
    function InqFormMarketingPage(navCtrl, navParams, formBuilder, loadingCtrl, inqProvider, notify, message, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.inqProvider = inqProvider;
        this.notify = notify;
        this.message = message;
        this.helper = helper;
        this.currentInq = this.navParams.get('data');
        this.inqForm = this.formBuilder.group({
            marketing: this.formBuilder.group({
                source: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                referred: [false],
                referant: ['']
            })
        });
        this.setEnums();
        this.setMarketingSource();
    }
    InqFormMarketingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqFormMarketingPage');
    };
    InqFormMarketingPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqFormMarketingPage.prototype.logForm3 = function () {
        var _this = this;
        if (this.inqForm.valid) {
            this.requestData = Object.assign({}, this.currentInq.data, this.inqForm.value);
            console.log("Form to be logged", this.requestData);
            this.presentLoadingCustom();
            this.inqProvider.updateInq(this.requestData)
                .subscribe(function (data) {
                _this.responseData = data;
                if (_this.responseData.data) {
                    _this.notify.showInfo(_this.message.INQUIRY.UPDATE.SUCCESS);
                    console.log("POST successful, the response data is:", data);
                }
                else {
                    _this.notify.showError(_this.message.INQUIRY.UPDATE.FAILURE);
                    console.log("POST unsucessful, server responded with error", _this.responseData.exception);
                }
            }, function (error) { console.log("POST unsuccessful, the server returned this error:", error); _this.loading.dismissAll(); }, function () {
                console.log("complete");
                _this.loading.dismissAll();
                if (_this.responseData.data) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__thankyou_thankyou__["a" /* ThankyouPage */]);
                }
            });
        }
        else {
            this.notify.showError(this.message.FORM.INVALID);
            console.log(this.inqForm);
            this.helper.markInvalidFields(this.inqForm);
            this.helper.markInvalidSelect(this.inqForm.get('marketing'), 'source');
        }
    };
    InqFormMarketingPage.prototype.setEnums = function () {
        this.enums = this.inqProvider.getEnums();
    };
    InqFormMarketingPage.prototype.setMarketingSource = function () {
        this.enqSource = this.enums.data.marketingSource;
    };
    InqFormMarketingPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__thankyou_thankyou__["a" /* ThankyouPage */]);
    };
    InqFormMarketingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-form-marketing',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-marketing\inq-form-marketing.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Just a final few questions...</ion-title>\n\n    <ion-buttons end>\n\n      <p class="form-number">3 of 3</p>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="inqForm" (ngSubmit)="logForm3()">\n\n    <ion-grid>\n\n      <ion-item-divider color="light">How did you hear about us?</ion-item-divider>\n\n      <div formGroupName= "marketing">\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Source</ion-label>\n\n                  <ion-select formControlName="source">\n\n                    <ion-option *ngFor="let source of enqSource" [value]=source>{{source}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Referred</ion-label>\n\n                  <ion-toggle formControlName="referred"></ion-toggle>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf = "inqForm.controls.marketing.controls.referred.value">\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Referrer Name</ion-label>\n\n                  <ion-input type="text" formControlName="referant"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n      </div>\n\n      <button ion-button full type="submit">Submit</button>\n\n    </ion-grid>\n\n  </form>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-buttons end>\n\n          <button ion-button clear class="skip-button" (click)="skip()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\inq-form-marketing\inq-form-marketing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__["a" /* HelperProvider */]])
    ], InqFormMarketingPage);
    return InqFormMarketingPage;
}());

//# sourceMappingURL=inq-form-marketing.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inq_form_personal_inq_form_personal__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../../pages/home/home';

var ThankyouPage = (function () {
    function ThankyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    // goToHome() {
    //   this.navCtrl.setRoot(HomePage);
    // }
    ThankyouPage.prototype.newInquiry = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inq_form_personal_inq_form_personal__["a" /* InqFormPersonalPage */]);
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\thankyou\thankyou.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Thank You!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>\n\n        <b>Our counsellor will get in touch with you soon.</b>\n\n      </h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>\n\n    </ion-card-content>\n\n    <ion-row no-padding>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="primary" icon-start (click)="goToHome()">\n\n          <ion-icon name=\'home\'></ion-icon>\n\n          Home\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="primary" icon-start (click)="newInquiry()">\n\n          <ion-icon name=\'md-create\'></ion-icon>\n\n          New Inquiry\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\visitor\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.id = 'admin';
        this.password = 'admin';
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (id, password) {
        if (this.authenticateUser(id, password)) {
            return true;
        }
        else {
            console.log("Invalid Credentials.");
            return false;
        }
    };
    AuthProvider.prototype.authenticateUser = function (id, password) {
        if (id === this.id && password === this.password) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inq_details_inq_details__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inq_summary_inq_summary__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__follow_up_modal_follow_up_modal__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InqListPage = (function () {
    function InqListPage(navCtrl, navParams, loadingCtrl, inqProvider, helper, sort, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.inqProvider = inqProvider;
        this.helper = helper;
        this.sort = sort;
        this.modalCtrl = modalCtrl;
        this.getAllInq();
        this.sortBy = {
            id: {
                bool: false,
                ascending: false,
                descending: false
            },
            caseIndex: {
                bool: false,
                ascending: false,
                descending: false
            },
            name: {
                bool: false,
                ascending: false,
                descending: false
            },
            inquiryDate: {
                bool: false,
                ascending: false,
                descending: false
            },
            areaOfInterest: {
                bool: false,
                ascending: false,
                descending: false
            }
        };
    }
    InqListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InqListPage');
    };
    InqListPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <img src=\"../../assets/imgs/loading.svg\" />\n      "
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    InqListPage.prototype.getAllInq = function () {
        var _this = this;
        this.presentLoadingCustom();
        this.inqProvider.getAllInq()
            .subscribe(function (data) {
            _this.responseData = data;
        }, function (error) { console.log("GET unsucessful, the server returned this error:", error), _this.loading.dismissAll(); }, function () {
            console.log("complete");
            _this.loading.dismissAll();
            _this.inquiries = _this.responseData.data;
        });
    };
    InqListPage.prototype.editInq = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inq_details_inq_details__["a" /* InqDetailsPage */], id);
    };
    InqListPage.prototype.viewInq = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inq_summary_inq_summary__["a" /* InqSummaryPage */], id);
    };
    InqListPage.prototype.toggleSeeMore = function (i) {
        this.inquiries[i].seeMore = !this.inquiries[i].seeMore;
    };
    InqListPage.prototype.defaultSortingCase = function (object) {
        Object.keys(object).forEach(function (key) {
            object[key]['bool'] = false;
            object[key]['ascending'] = false;
            object[key]['descending'] = false;
        });
    };
    InqListPage.prototype.toggleSort = function (sortByThis) {
        if (!this.sortBy[sortByThis]['bool']) {
            this.defaultSortingCase(this.sortBy);
            this.sortBy[sortByThis]['bool'] = true;
            this.sortBy[sortByThis]['ascending'] = true;
            this.sortInqList(this.inquiries, sortByThis, 'ascending');
        }
        else {
            if (this.sortBy[sortByThis]['ascending'])
                this.sortInqList(this.inquiries, sortByThis, 'descending');
            this.sortBy[sortByThis]['ascending'] = !this.sortBy[sortByThis]['ascending'];
            if (this.sortBy[sortByThis]['descending'])
                this.sortInqList(this.inquiries, sortByThis, 'ascending');
            this.sortBy[sortByThis]['descending'] = !this.sortBy[sortByThis]['descending'];
        }
    };
    InqListPage.prototype.sortInqList = function (data, field, order) {
        if (field != 'followUpDetails' && field != 'caseIndex') {
            this.sortedInquiries = this.sort.byString(data, field, order);
        }
    };
    InqListPage.prototype.filterInqByDate = function (from, to) {
        this.inquiries = this.inquiries.filter(function (inq) { return inq.inquiryDate >= from && inq.inquiryDate <= to; });
        console.log(this.inquiries);
    };
    InqListPage.prototype.openFollowUpModal = function (id, name) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__follow_up_modal_follow_up_modal__["a" /* FollowUpModalPage */], { id: id, name: name });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    InqListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inq-list',template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-list\inq-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Inquiry List</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-toolbar class="filter-toolbar" color="light">\n\n    <ion-row>\n\n      <ion-col col-1 class="absolute-center-contents">\n\n        <ion-icon title="Filter" name="funnel"></ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <p>From:</p>\n\n          </ion-col>\n\n          <ion-col col-2 class="absolute-center-contents">\n\n            <input #fromDate type="date">\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p>To:</p>\n\n          </ion-col>\n\n          <ion-col col-2 class="absolute-center-contents">\n\n            <input #toDate type="date">\n\n          </ion-col>\n\n          <ion-col col-1 class="absolute-center-contents">\n\n              <button (click)="filterInqByDate(fromDate.value,toDate.value)" ion-button clear small>Apply</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n\n\n  <ion-card color="light">\n\n    <ion-row>\n\n      <ion-col col-1 class="absolute-center-contents">\n\n        <div class="header-title" (click)="toggleSort(\'id\')" pointer>\n\n          ID\n\n          <span class="sort-icon" *ngIf="sortBy.id.bool">\n\n              <ion-icon [name] = "sortBy.id.ascending?\'ios-arrow-down\':\'ios-arrow-up\'" class="see-more"></ion-icon>\n\n          </span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 class="absolute-center-contents">\n\n        <div class="header-title" (click)="toggleSort(\'caseIndex\')" pointer>\n\n          Case index\n\n          <span class="sort-icon" *ngIf="sortBy.caseIndex.bool">\n\n            <ion-icon [name] = "sortBy.caseIndex.ascending?\'ios-arrow-down\':\'ios-arrow-up\'" class="see-more"></ion-icon>\n\n          </span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="header-title" (click)="toggleSort(\'name\')" pointer>\n\n          Name\n\n          <span class="sort-icon" *ngIf="sortBy.name.bool">\n\n            <ion-icon [name] = "sortBy.name.ascending?\'ios-arrow-down\':\'ios-arrow-up\'" class="see-more"></ion-icon>\n\n          </span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 class="absolute-center-contents">\n\n        <div class="header-title" (click)="toggleSort(\'inquiryDate\')" pointer>\n\n          Date\n\n          <span class="sort-icon" *ngIf="sortBy.inquiryDate.bool">\n\n            <ion-icon [name] = "sortBy.inquiryDate.ascending?\'ios-arrow-down\':\'ios-arrow-up\'" class="see-more"></ion-icon>\n\n          </span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-2 class="absolute-center-contents">\n\n        <div class="header-title" (click)="toggleSort(\'areaOfInterest\')" pointer>\n\n          Course Interested In\n\n          <span class="sort-icon" *ngIf="sortBy.areaOfInterest.bool">\n\n            <ion-icon [name] = "sortBy.areaOfInterest.ascending?\'ios-arrow-down\':\'ios-arrow-up\'" class="see-more"></ion-icon>\n\n          </span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <div>\n\n          Follow Up Details\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card *ngFor = "let inq of (sortedInquiries?sortedInquiries:inquiries); let i = index;">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1 class="absolute-center-contents">\n\n          <p>{{inq?.id}}.</p>\n\n        </ion-col>\n\n        <ion-col col-1 class="absolute-center-contents">\n\n          <div *ngIf = "inq.followUps[0]">\n\n            <div *ngIf = "inq.followUps[0].caseIndex == \'Likely\'">\n\n              <ion-icon name="flash" class="case-index-3"></ion-icon>\n\n            </div>\n\n            <div *ngIf = "inq.followUps[0].caseIndex == \'Hot Lead\'">\n\n              <ion-icon name="flash" class="case-index-4"></ion-icon>\n\n              <ion-icon name="flash" class="case-index-4"></ion-icon>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p><b (click)="viewInq(inq.id)" pointer>{{inq?.name}}</b>&nbsp;&nbsp;&nbsp;<ion-icon color="primary" name=\'md-create\' (click)="editInq(inq.id)"></ion-icon></p>\n\n          <p>{{inq?.mobile}} | {{inq?.email}}</p>\n\n        </ion-col>\n\n        <ion-col col-1 class="absolute-center-contents">\n\n          <p>{{inq?.inquiryDate | date: "dd/MM/yyyy"}}</p>\n\n        </ion-col>\n\n        <ion-col col-2 class="absolute-center-contents">\n\n          <p>{{inq?.areaOfInterest}}</p>\n\n        </ion-col>\n\n        <ion-col col-2 class="vertical-center-contents">\n\n          <p *ngIf = "inq.inquiryStatus == \'Open\' && inq.followUps" title="Follow Up Status">{{inq?.followUps[0]?.followUpStatus}}</p>\n\n          <p *ngIf = "inq.inquiryStatus == \'Close\'" title="Closing Status">{{inq?.closingStatus}}</p>\n\n        </ion-col>\n\n        <ion-col col-1 class="absolute-center-contents">\n\n            <button (click)="openFollowUpModal(inq.id,inq.name)" pointer *ngIf="inq.inquiryStatus == \'Open\'" ion-button icon-end clear small>\n\n              Follow Up\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="inq.seeMore">\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col>\n\n          <p>Guardian: <span *ngIf="inq.guardian">{{inq?.guardian?.name}}, {{inq?.guardian?.relation}}</span><span *ngIf="!inq.guardian">Not Available</span></p>\n\n          <p *ngIf="!inq.guardian">{{inq?.guardian?.phoneNumber}}</p>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-2></ion-col>\n\n        <ion-col col-2>\n\n          <p *ngIf = "inq.inquiryStatus == \'Open\' && inq.followUps" title="Follow Up Sub-Status">{{inq?.followUps[0]?.subStatus}}</p>\n\n          <p *ngIf = "inq.inquiryStatus == \'Close\'" title="Closing Sub-Status">{{inq?.closingSubStatus}}</p>\n\n          <p *ngIf = "inq.inquiryStatus == \'Open\' && inq.followUps" title="Follow Up Remark">{{inq?.followUps[0]?.remark}}</p>\n\n          <p *ngIf = "inq.inquiryStatus == \'Close\'" title="Closing Remark">{{inq?.closingRemark}}</p>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col (click)="toggleSeeMore(i)" pointer class="absolute-center-contents remove-padding">\n\n          <ion-icon *ngIf = "inq.seeMore" name="ios-arrow-up" class="see-more"></ion-icon>\n\n          <ion-icon *ngIf = "!inq.seeMore" name="ios-arrow-down" class="see-more"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\pages\counselor\inq-list\inq-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sort_sort__["a" /* SortProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], InqListPage);
    return InqListPage;
}());

//# sourceMappingURL=inq-list.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InqProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InqProvider = (function () {
    function InqProvider(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9002/inquiry';
        console.log('Hello InqProvider Provider');
    }
    InqProvider.prototype.getInqById = function (id) {
        return this.http.get(this.baseUrl + '/getById', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('id', id)
        });
    };
    InqProvider.prototype.getInqByStatus = function (status) {
        return this.http.get(this.baseUrl + '/getByStatus', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('status', status)
        });
    };
    InqProvider.prototype.getAllInq = function () {
        return this.http.get(this.baseUrl + '/getAll');
    };
    InqProvider.prototype.getUnattendedInquiries = function () {
        return this.http.get(this.baseUrl + '/getUnattended-inquiry', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('boolParam', 'false').set('statusParam', 'open')
        });
    };
    InqProvider.prototype.getInquiryStats = function () {
        return this.http.get(this.baseUrl + '/counsellor/dashboard/inquiryCounts');
    };
    InqProvider.prototype.createInq = function (data) {
        return this.http.post(this.baseUrl + '/register', data);
    };
    InqProvider.prototype.updateInq = function (data) {
        return this.http.post(this.baseUrl + '/update', data);
    };
    InqProvider.prototype.setEnums = function () {
        var _this = this;
        this.http.get(this.baseUrl + '/server-info')
            .subscribe(function (data) { _this.enums = data; }, function (error) { console.log("Error getting enums"); }, function () { console.log("Set enum complete"); });
    };
    InqProvider.prototype.getEnums = function () {
        if (this.enums) {
            return this.enums;
        }
        else {
            this.setEnums();
            return this.enums;
        }
    };
    InqProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InqProvider);
    return InqProvider;
}());

//# sourceMappingURL=inq.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelperProvider = (function () {
    function HelperProvider(http, menu) {
        var _this = this;
        this.http = http;
        this.menu = menu;
        this.removeEmptyFromObject = function (obj) {
            var o = JSON.parse(JSON.stringify(obj)); // Clone source oect.
            Object.keys(o).forEach(function (key) {
                if (o[key] && typeof o[key] === 'object')
                    o[key] = _this.removeEmptyFromObject(o[key]); // Recurse.
                else if (o[key] === undefined || o[key] === null)
                    delete o[key]; // Delete undefined and null.
                else
                    o[key] = o[key]; // Copy value.
            });
            return o; // Return new object.
        };
        console.log('Hello HelperProvider Provider');
    }
    HelperProvider.prototype.setActiveMenu = function (menuID) {
        this.menu.enable(true, menuID);
    };
    HelperProvider.prototype.markInvalidFields = function (formGroup) {
        for (var control in formGroup.controls) {
            formGroup.controls[control].markAsTouched();
            formGroup.controls[control].updateValueAndValidity();
        }
        var ionItems = document.getElementsByTagName("ion-item");
        if (ionItems) {
            for (var i = 0; i < ionItems.length; i++) {
                if (ionItems[i].classList.contains('ng-untouched')) {
                    ionItems[i].classList.remove('ng-untouched');
                    ionItems[i].classList.add('ng-touched');
                }
            }
        }
        var pinAutoComplete = document.getElementsByTagName("ng2-completer")[0];
        if (pinAutoComplete && pinAutoComplete.classList.contains('ng-untouched')) {
            pinAutoComplete.classList.remove('ng-untouched');
            pinAutoComplete.classList.add('ng-touched');
        }
    };
    HelperProvider.prototype.emailOrEmptyValidator = function (control) {
        return control.value === '' ? null : __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email(control);
    };
    HelperProvider.prototype.markInvalidSelect = function (formGroup, ctrlName) {
        var shadesEl = document.querySelector('[formControlName="' + ctrlName + '"]').parentElement.parentElement.parentElement;
        var control = formGroup.get(ctrlName);
        if (control.errors != null) {
            shadesEl.classList.remove('ng-untouched');
            shadesEl.classList.add('ng-invalid', 'ng-touched', 'ng-dirty');
        }
        else {
            shadesEl.classList.remove('ng-dirty', 'ng-invalid');
        }
    };
    HelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* MenuController */]])
    ], HelperProvider);
    return HelperProvider;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_completer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_visitor_inq_form_personal_inq_form_personal__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visitor_inq_form_education_guardian_inq_form_education_guardian__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_visitor_inq_form_marketing_inq_form_marketing__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_visitor_thankyou_thankyou__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_counselor_home_home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_counselor_inq_details_inq_details__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_counselor_inq_list_inq_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_counselor_inq_summary_inq_summary__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_counselor_inq_close_modal_inq_close_modal__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_counselor_follow_up_modal_follow_up_modal__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_counselor_reminder_modal_reminder_modal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_notification_notification__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_locality_locality__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_notification_message_notification_message__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_helper_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_follow_up_follow_up__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_reminder_reminder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_sort_sort__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_quote_quote__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_visitor_inq_form_personal_inq_form_personal__["a" /* InqFormPersonalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visitor_inq_form_education_guardian_inq_form_education_guardian__["a" /* InqFormEducationGuardianPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_visitor_inq_form_marketing_inq_form_marketing__["a" /* InqFormMarketingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_counselor_inq_details_inq_details__["a" /* InqDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_counselor_inq_list_inq_list__["a" /* InqListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_counselor_inq_summary_inq_summary__["a" /* InqSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visitor_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_counselor_inq_close_modal_inq_close_modal__["a" /* InqCloseModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_counselor_home_home__["a" /* CounselorDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_counselor_follow_up_modal_follow_up_modal__["a" /* FollowUpModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_counselor_reminder_modal_reminder_modal__["a" /* ReminderModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_visitor_inq_form_personal_inq_form_personal__["a" /* InqFormPersonalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visitor_inq_form_education_guardian_inq_form_education_guardian__["a" /* InqFormEducationGuardianPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_visitor_inq_form_marketing_inq_form_marketing__["a" /* InqFormMarketingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_counselor_inq_details_inq_details__["a" /* InqDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_counselor_inq_list_inq_list__["a" /* InqListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_counselor_inq_summary_inq_summary__["a" /* InqSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visitor_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_counselor_inq_close_modal_inq_close_modal__["a" /* InqCloseModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_counselor_home_home__["a" /* CounselorDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_counselor_follow_up_modal_follow_up_modal__["a" /* FollowUpModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_counselor_reminder_modal_reminder_modal__["a" /* ReminderModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_21__providers_inq_inq__["a" /* InqProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_locality_locality__["a" /* LocalityProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_notification_message_notification_message__["a" /* NotificationMessageProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_helper_helper__["a" /* HelperProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_follow_up_follow_up__["a" /* FollowUpProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_reminder_reminder__["a" /* ReminderProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_sort_sort__["a" /* SortProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_quote_quote__["a" /* QuoteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationProvider = (function () {
    function NotificationProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello NotificationProvider Provider');
    }
    NotificationProvider.prototype.showInfo = function (message) {
        try {
            this.toast.dismiss();
        }
        catch (e) { }
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
    };
    NotificationProvider.prototype.showError = function (message) {
        try {
            this.toast.dismiss();
        }
        catch (e) { }
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
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_follow_up_follow_up__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_counselor_home_home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_counselor_inq_list_inq_list__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, inqProvider, followUpProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.inqProvider = inqProvider;
        this.followUpProvider = followUpProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.user = "Admin";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.visitorPages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
        ];
        this.counselorPages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_counselor_home_home__["a" /* CounselorDashboardPage */] },
            { title: 'Inquiries', component: __WEBPACK_IMPORTED_MODULE_8__pages_counselor_inq_list_inq_list__["a" /* InqListPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //Getting all the enum values for the application here
            _this.inqProvider.getEnums();
            _this.followUpProvider.getEnums();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\app\app.html"*/'<ion-menu [content]="content" id="visitor">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of visitorPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-menu [content]="content" id="counselor">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Welcome {{user}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of counselorPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"G:\Keshav Internship\Lead Management System\creativei_inquiry_client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_inq_inq__["a" /* InqProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_follow_up_follow_up__["a" /* FollowUpProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationMessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageProvider = (function () {
    function NotificationMessageProvider(http) {
        this.http = http;
        this.INQUIRY = {
            REGISTER: {
                SUCCESS: "Inquiry Registered Successfully",
                FAILURE: "Server retutned an error. Cannot register inquiry."
            },
            UPDATE: {
                SUCCESS: "Inquiry Updated Successfully",
                FAILURE: "Server retutned an error. Cannot update inquiry."
            }
        };
        this.FORM = {
            INVALID: "Invalid or missing inquiry details."
        };
        console.log('Hello NotificationMessageProvider Provider');
    }
    NotificationMessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationMessageProvider);
    return NotificationMessageProvider;
}());

//# sourceMappingURL=notification-message.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ascending";
    SortDirection["DESCENDING"] = "descending";
})(SortDirection || (SortDirection = {}));
var SortProvider = (function () {
    function SortProvider(http) {
        this.http = http;
        console.log('Hello SortProvider Provider');
    }
    SortProvider.prototype.byString = function (data, field, order) {
        if (order == SortDirection.ASCENDING) {
            return data.sort(function (a, b) {
                var valueA = a[field].toString().toUpperCase(); // ignore upper and lowercase
                var valueB = b[field].toString().toUpperCase(); // ignore upper and lowercase
                if (valueA < valueB) {
                    return -1;
                }
                if (valueA > valueB) {
                    return 1;
                }
                // values must be equal
                return 0;
            });
        }
        else if (order == SortDirection.DESCENDING) {
            return data.sort(function (a, b) {
                var valueA = a[field].toString().toUpperCase(); // ignore upper and lowercase
                var valueB = b[field].toString().toUpperCase(); // ignore upper and lowercase
                if (valueA > valueB) {
                    return -1;
                }
                if (valueA < valueB) {
                    return 1;
                }
                // values must be equal
                return 0;
            });
        }
    };
    SortProvider.prototype.byNumber = function (data, order) {
        if (order == SortDirection.ASCENDING) {
            return data.sort(function (a, b) { return a - b; });
        }
        else if (order == SortDirection.DESCENDING) {
            return data.sort(function (a, b) { return b - a; });
        }
    };
    SortProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SortProvider);
    return SortProvider;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowUpProvider = (function () {
    function FollowUpProvider(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9002/follow-up';
        console.log('Hello FollowUpProvider Provider');
    }
    FollowUpProvider.prototype.setEnums = function () {
        var _this = this;
        this.http.get(this.baseUrl + '/server-info')
            .subscribe(function (data) { _this.enums = data; }, function (error) { console.log("Error getting enums"); }, function () { console.log("Set enum complete"); });
    };
    FollowUpProvider.prototype.getEnums = function () {
        if (this.enums) {
            return this.enums;
        }
        else {
            this.setEnums();
            return this.enums;
        }
    };
    FollowUpProvider.prototype.create = function (data) {
        return this.http.post(this.baseUrl + '/create', data);
    };
    FollowUpProvider.prototype.update = function (data) {
        return this.http.post(this.baseUrl + '/update', data);
    };
    FollowUpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FollowUpProvider);
    return FollowUpProvider;
}());

//# sourceMappingURL=follow-up.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map