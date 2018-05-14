import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/Auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginStatus: string;
  constructor(private service:AuthService) { }
  
  ngOnInit() {
    this.loginStatus = "logged out";
  }

  singinWithGoogle():void{
    this.service.init();
    this.service.signInWithGoogle();
  }
  goTo():void{
    if(this.service.isLoggedIn()){
      this.service.router.navigate(['/imgur'])
    }
  }
}
