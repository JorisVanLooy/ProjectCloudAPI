import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ImgurService} from './services/Imgur-service';
import { ImgurComponent } from './imgur/imgur.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TestAlbumComponent } from './test-album/test-album.component';
import {AlbumService} from './services/Album-service';
import {SongService} from './services/Song-service';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './services/Auth-service';
import {TestSongComponent} from './test-song/test-song.component'
@NgModule({
  declarations: [
    AppComponent,
    ImgurComponent,
    TestAlbumComponent,
    LoginComponent,
    TestSongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      //{path: 'login', component: LoginComponent},
      {path: 'imgur', component: ImgurComponent},
      {path: 'album', component: TestAlbumComponent},
      {path: 'song', component: TestSongComponent},
      {path: '', redirectTo: 'imgur', pathMatch: 'full'},
      
      //{path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
  ],
  providers: [
    ImgurService,
    AlbumService,
    AuthService,
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
