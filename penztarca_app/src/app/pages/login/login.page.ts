import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passToogleIcon = 'eye-off';
  loginData: FormGroup;
  
  constructor(private route: Router,private authService: AuthService) {
    this.loginData = new FormGroup({
      email: new FormControl(),
      pass: new FormControl()
    });
  }

  ngOnInit() {
  }

  tooglePassword():void {
    this.showPassword = !this.showPassword;

    if(this.passToogleIcon == 'eye'){
      this.passToogleIcon = 'eye-off';
      return;
    }
    this.passToogleIcon = 'eye'; 
  }

  logForm() {
    console.log(this.loginData.value);
    this.authService.login(this.loginData.get('email').value, this.loginData.get('pass').value)
      .then(cred => {
        console.log(cred);
        this.route.navigateByUrl('/menu/fooldal');
      })
      .catch(error => {
        console.error(error);
      });
    //ide kellenek majd ellenőrzések
    
  }

}
