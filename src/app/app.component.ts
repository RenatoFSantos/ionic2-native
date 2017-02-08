import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: HomePage, title: 'Home', icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any, menuside: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuside);
  }

  closeMenu() : void {
    this.menuCtrl.close();
  }

}
