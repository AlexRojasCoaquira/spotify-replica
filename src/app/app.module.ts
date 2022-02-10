import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { InterceptorService } from './interceptors/interceptor.service';
// import { DomseguroPipe } from './core/pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS ,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
