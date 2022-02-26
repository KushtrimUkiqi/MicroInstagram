import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logoImageURL: string;
  homeImageURL : string;
  addImageURL : string;

  constructor()
  {
    this.logoImageURL = 'assets/images/logo.svg';
    this.homeImageURL = 'assets/images/home.svg';
    this.addImageURL = 'assets/images/add-photo.svg';
  }

  ngOnInit(): void {
  }

}
