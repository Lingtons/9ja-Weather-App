import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';




/*
  Generated class for the StateDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StateDataProvider {
states: Observable<any>;
  data: any;
  constructor(public http: Http) {}
'assets/data/state-data.json'  
    load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
	let url = 'http://locationsng-api.herokuapp.com/api/v1/lgas';
	return this.http.get(url)
		.map(res => res.json());  
	}
  }
  

  getStates() {
    return this.load().map((data: any) => {
      return data;
    });
  }

}
