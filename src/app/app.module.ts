import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CoindeltaComponent } from './component/coindelta/coindelta.component';
import { KoinexComponent } from './component/koinex/koinex.component';
import { ZebpayComponent } from './component/zebpay/zebpay.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BitbnsComponent } from './component/bitbns/bitbns.component';
import { MixtureComponent } from './component/mixture/mixture.component';


//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CoindeltaComponent,
    KoinexComponent,
    ZebpayComponent,
    HeaderComponent,
    FooterComponent,
    BitbnsComponent,
    MixtureComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MaterialModule,
  //  ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
