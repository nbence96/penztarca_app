import { Component, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { StripeServicesService } from 'src/app/services/stripe-services.service';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.page.html',
  styleUrls: ['./fooldal.page.scss'],
})
export class FooldalPage implements OnInit {

  userApiKey: string;

  constructor(private service: FbBaseService<any>, private stripeservice: StripeServicesService) {
    this.service.get('userInfo').subscribe(data => {
      for(let i = 0; i < data.length;i++){
        if(data[i]['email'] == JSON.parse(localStorage.getItem('user'))['email']){
          this.userApiKey = data[i]['apiKey'];
          this.stripeservice.getBalance(this.userApiKey);
        }
      }
    });
   }

  ngOnInit() {
  }

}
