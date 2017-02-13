import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network} from 'ionic-native';

/*
  Generated class for the NetworkTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network-test',
  templateUrl: 'network-test.html'
})
export class NetworkTestPage {

  connectionType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkTestPage');
  }

  check(): void {
    this.connectionType = Network.type;

    if(Network.type === 'wifi') {
      console.log('Nós estamos conectados no wifi');
    }
  }
}
