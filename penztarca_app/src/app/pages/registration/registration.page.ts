import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  showPassword1 = false;
  showPassword2 = false;
  passwordToogleIcon1 = 'eye-off';
  passwordToogleIcon2 = 'eye-off';
  formData: FormGroup;

  constructor(private service: FbBaseService<any>,private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass1: new FormControl('', Validators.required),
      pass2: new FormControl('', Validators.required),
      apiKey: new FormControl('', Validators.required)
    });
  }

  tooglePassword1():void{
    this.showPassword1 = !this.showPassword1;

    if(this.passwordToogleIcon1 == 'eye'){
      this.passwordToogleIcon1 = 'eye-off';
    }else{
      this.passwordToogleIcon1 = 'eye';
    }
  }

  tooglePassword2():void{
    this.showPassword2 = !this.showPassword2;

    if(this.passwordToogleIcon2 == 'eye'){
      this.passwordToogleIcon2 = 'eye-off';
    }else{
      this.passwordToogleIcon2 = 'eye';
    }
  }

  regForm() {
    console.log(this.formData.value);
    console.log(this.formData.valid)
    this.authService.registration(this.formData.get('email').value, this.formData.get('pass1').value)
      .then(cred => {
        console.log(cred);
        if(this.service.add("userInfo",this.formData.value)){
          console.log("sikeres felvétel!");
          this.route.navigateByUrl('/login');
        }else{
          console.log("sikertelen felvétel!");
        }
        
      })
      .catch(error => {
        console.error(error);
      });
  }

}
