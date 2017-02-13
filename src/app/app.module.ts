import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CameraTestPage } from '../pages/camera-test/camera-test';
import { NetworkTestPage } from '../pages/network-test/network-test';
import { NotificationTestPage } from '../pages/notification-test/notification-test';
import { BarcodeTestPage } from '../pages/barcode-test/barcode-test';
import { VibrationTestPage } from '../pages/vibration-test/vibration-test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraTestPage,
    NetworkTestPage,
    NotificationTestPage,
    BarcodeTestPage,
    VibrationTestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraTestPage,
    NetworkTestPage,
    NotificationTestPage,
    BarcodeTestPage,
    VibrationTestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
