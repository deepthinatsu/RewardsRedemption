import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedeemService } from '../redeem.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  currentlogin: any;
  errorMessage: string;

  constructor(protected router:Router,
              protected loginService: LoginService,
              protected redemService: RedeemService) { }

  ngOnInit(): void {
    this.errorMessage = '';
  }

  validate(){
    console.log("hello1");
   
      console.log("hello");
            this.redemService
     
      .validatelogin(this.username, this.password)
      .subscribe(
        (response) => {
          this.currentlogin = response;
          
          console.log("h42i");
          if (this.currentlogin) {
            this.loginService.loginUser(this.currentlogin);
            this.redemService.setRewardPoints(this.currentlogin.rewards);
//sessionStorage.setItem('key', 'true');
            this.router.navigate(['/list']);
          }
         else 
         { 
            console.log("h22");
            this.errorMessage = "Invalid username/password";
          }
        }
      );
  
}
}
