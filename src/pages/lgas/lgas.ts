import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';



/**
 * Generated class for the LgasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-lgas',
  templateUrl: 'lgas.html',
})
export class LgasPage {
state : any;
lgas : any[] = [];
alias : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    
	
  ionViewDidLoad() {
    this.state  = this.navParams.get('state');
	this.lgas  = this.navParams.get('lgas');
	this.alias  = this.navParams.get('alias');
	console.log(this.lgas);
	
  }
  

  
    

}
