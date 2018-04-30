import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ImgurService} from './services/Imgur-service';
import { ImgurComponent } from './imgur/imgur.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ImgurComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'imgur', component: ImgurComponent},
      {path: '', redirectTo: 'imgur', pathMatch: 'full'},
      //{path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
  ],
  providers: [
    ImgurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
