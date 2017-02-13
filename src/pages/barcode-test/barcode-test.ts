import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-barcode-test',
  templateUrl: 'barcode-test.html'
})
export class BarcodeTestPage {

  barcodeData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeTestPage');
  }

  scan(): void {
    BarcodeScanner.scan().then(barcodeData => {
      this.barcodeData = barcodeData;

    }, (err) => {
      console.log(err);
    });
  }

}
