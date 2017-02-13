import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from 'ionic-native';


@Component({
  selector: 'page-vibration-test',
  templateUrl: 'vibration-test.html'
})
export class VibrationTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationTestPage');
  }

  vibrate(): void {
    Vibration.vibrate(3000);
  }

}
