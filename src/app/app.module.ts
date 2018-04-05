import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ng2CompleterModule } from "ng2-completer";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InqFormPersonalPage } from '../pages/visitor/inq-form-personal/inq-form-personal';
import { InqFormEducationGuardianPage } from '../pages/visitor/inq-form-education-guardian/inq-form-education-guardian';
import { InqFormMarketingPage } from '../pages/visitor/inq-form-marketing/inq-form-marketing';
import { ThankyouPage } from '../pages/visitor/thankyou/thankyou';
import { CounselorDashboardPage } from '../pages/counselor/home/home';
import { InqDetailsPage } from '../pages/counselor/inq-details/inq-details';
import { InqListPage } from '../pages/counselor/inq-list/inq-list';
import { InqSummaryPage } from '../pages/counselor/inq-summary/inq-summary';
import { InqCloseModalPage } from '../pages/counselor/inq-close-modal/inq-close-modal';
import { FollowUpModalPage } from '../pages/counselor/follow-up-modal/follow-up-modal';
import { ReminderModalPage } from '../pages/counselor/reminder-modal/reminder-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InqProvider } from '../providers/inq/inq';
import { NotificationProvider } from '../providers/notification/notification';
import { LocalityProvider } from '../providers/locality/locality';
import { NotificationMessageProvider } from '../providers/notification-message/notification-message';
import { HelperProvider } from '../providers/helper/helper';
import { FollowUpProvider } from '../providers/follow-up/follow-up';
import { AuthProvider } from '../providers/auth/auth';
import { ReminderProvider } from '../providers/reminder/reminder';
import { SortProvider } from '../providers/sort/sort';
import { QuoteProvider } from '../providers/quote/quote';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InqFormPersonalPage,
    InqFormEducationGuardianPage,
    InqFormMarketingPage,
    InqDetailsPage,
    InqListPage,
    InqSummaryPage,
    ThankyouPage,
    InqCloseModalPage,
    CounselorDashboardPage,
    FollowUpModalPage,

    ReminderModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CompleterModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InqFormPersonalPage,
    InqFormEducationGuardianPage,
    InqFormMarketingPage,
    InqDetailsPage,
    InqListPage,
    InqSummaryPage,
    ThankyouPage,
    InqCloseModalPage,
    CounselorDashboardPage,
    FollowUpModalPage,
    ReminderModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    InqProvider,
    NotificationProvider,
    LocalityProvider,
    NotificationMessageProvider,
    HelperProvider,
    FollowUpProvider,
    AuthProvider,
    ReminderProvider,
    SortProvider,
    QuoteProvider
  ]
})
export class AppModule {}
