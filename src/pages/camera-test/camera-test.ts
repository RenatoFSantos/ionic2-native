import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-camera-test',
  templateUrl: 'camera-test.html'
})
export class CameraTestPage {

  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraTestPage');
  }

  takePhoto(): void {
    Camera.getPicture({
        quality: 100,
        cameraDirection: Camera.Direction.FRONT,
        destinationType: Camera.DestinationType.DATA_URL
      }).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
    }, (err) => {
        console.log(err);
    });
  }
}
