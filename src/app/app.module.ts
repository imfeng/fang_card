import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgReduxModule } from '@angular-redux/store';
import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoreProvider } from '../providers/store/store';
import { EnvironmentsProvider } from '../providers/environments/environments';
import { HelperProvider } from '../providers/helper/helper';
import { GameActions } from '../providers/action/action';
import { InterfaceProvider,STATUS,ICard,IState } from '../providers/interface/interface';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    ComponentsModule,
    NgReduxModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  exports: [
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoreProvider,
    EnvironmentsProvider,
    HelperProvider,
    GameActions,
    InterfaceProvider
  ]
})
export class AppModule {}
