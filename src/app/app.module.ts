import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BreweryService} from './services/brewery.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BreweryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
