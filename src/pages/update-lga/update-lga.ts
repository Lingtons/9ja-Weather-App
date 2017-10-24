import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdateLgaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-lga',
  templateUrl: 'update-lga.html',
})
export class UpdateLgaPage {
lga : any;
alias : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.lga  = this.navParams.get('lga');
	console.log('LGA', this.navParams.get('lga'));
	
  }
  
  closeModal(){
  
  this.viewCtrl.dismiss();
  
  }

}
