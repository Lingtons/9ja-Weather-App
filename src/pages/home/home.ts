import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherPage} from '../weather/weather';
import {StateDataProvider} from '../../providers/state-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[StateDataProvider]
})
export class HomePage {
states : any[] = [];

  constructor(
			public navCtrl: NavController,
			public statesData: StateDataProvider
			)

			{}
  
  
  	ionViewDidLoad() {
    this.statesData.getStates().subscribe((states: any[]) => {
      this.states = states;
	  console.log(this.states);
    });
  }
  
    checkWeather(state) {
    this.navCtrl.push(WeatherPage, state);
  }

}
