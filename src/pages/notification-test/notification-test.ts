import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';


@Component({
  selector: 'page-notification-test',
  templateUrl: 'notification-test.html'
})
export class NotificationTestPage {

  notification: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    LocalNotifications.on('click', (notification, state) => {
      this.notification = notification;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationTestPage');
  }

  send(): void {
    LocalNotifications.schedule({
      id: 1,
      text: 'Notificação de teste',
      data: {secret: 'olá'}
    });
  }

}
