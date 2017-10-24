import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { CacheModule } from 'ionic-cache';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LgasPage } from '../pages/lgas/lgas';
import {UpdateLgaPage} from '../pages/update-lga/update-lga';
import {WeatherPage} from '../pages/weather/weather';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StateDataProvider } from '../providers/state-data';
import { WeatherDataProvider } from '../providers/weather-data/weather-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LgasPage,
	UpdateLgaPage,
	WeatherPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
	CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LgasPage,
	UpdateLgaPage,
	WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StateDataProvider,
    WeatherDataProvider
  ]
})
export class AppModule {}
 