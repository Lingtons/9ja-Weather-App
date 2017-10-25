import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CacheService } from 'ionic-cache';

@Injectable()
export class WeatherDataProvider {
  apiKey = '00221973d2263492';
  weatherKey = 'weather-group';
  
  url;

  constructor(public http: Http, public cache: CacheService,) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(country, state){
  
	let delayType = 'all';
	//weather data to be cached for 2 hours
    let ttl = 60*60*2;
	let content = this.url+'/'+country+'/'+state+'.json';
    let req = this.http.get(content);
	
	return this.cache.loadFromDelayedObservable(content, req, this.weatherKey, ttl, delayType).map(res => res.json());
  }

}
