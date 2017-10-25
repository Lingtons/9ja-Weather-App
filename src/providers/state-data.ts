import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { CacheService } from 'ionic-cache';



/*
  Generated class for the StateDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StateDataProvider {
states: Observable<any>;
stateKey = 'state-group';
  data: any;
  constructor(public http: Http, public cache: CacheService) {}

    load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
	
	let delayType = 'all';
	//state data to be cached for a week
    let ttl = 60*60*24*7;
	let url = 'http://locationsng-api.herokuapp.com/api/v1/lgas';
	let req = this.http.get(url);
	
	return this.cache.loadFromDelayedObservable(url, req, this.stateKey, ttl, delayType).map(res => res.json());
	
	}
  } 
  

  getStates() {
    return this.load().map((data: any) => {
      return data;
    });
  }

}
