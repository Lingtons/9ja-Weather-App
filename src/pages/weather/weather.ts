import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherDataProvider } from '../../providers/weather-data/weather-data';
import {LgasPage} from '../lgas/lgas';

/**
 * Generated class for the WeatherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
	state : any;
	lgas : any[] = [];
	alias : any;
	country = 'Nigeria';
	weather:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherDataProvider:WeatherDataProvider,) {
  }

  ionViewDidLoad() {
    this.state  = this.navParams.get('state');
	this.lgas  = this.navParams.get('lgas');
	this.alias  = this.navParams.get('alias');
	
	      this.weatherDataProvider.getWeather(this.country, this.alias)  .subscribe(weather => {
          this.weather = weather.current_observation;
		  console.log(this.weather);
        });
	
  }
  
  lgaList(lgas){
  
  this.navCtrl.push(LgasPage, {lgas});
  
  }
  


}
