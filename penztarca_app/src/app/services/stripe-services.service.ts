import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeServicesService {

  constructor() { }

  getBalance(apikey: string){
    console.log(apikey);
    const Stripe = require('stripe');
    const stripe = Stripe("pk_test_51KTr3qLoedboQm2gUXyQ7PqH5sygbQyMmCN0awQ5BqVdFGC5kw6eMvdnRFFZSpyMPeAgrx0XPqjL2dteIpgzXep700TFuNv5uH");
    stripe.balance.retrieve(function(err, balance) {
      // asynchronously called
      console.log(balance);
      console.error(err);
    });
  }
}
