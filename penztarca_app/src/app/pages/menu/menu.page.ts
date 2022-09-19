import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Főoldal',
      url: '/menu/fooldal',
      icon: 'home'
    },
    {
      title: 'Kijelentkezés',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];

  selectedPath = '';

  loggedInUser?: firebase.default.User | null;

  constructor(private route: Router, private authService: AuthService) {
    this.route.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser))
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify(null))
    });
  }

  logout(){
    this.authService.logout()
      .then(() => {
        console.log("Sikeres kijelentkezés!");
      })
      .catch(error => {
        console.error(error);
      });
  }

}
