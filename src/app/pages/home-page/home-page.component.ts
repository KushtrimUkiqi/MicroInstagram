import { Component, OnInit } from '@angular/core';
import { DisplayType } from './enumerations/display-type';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  displayType: DisplayType;
  

  constructor() { 
    this.displayType = DisplayType.GRID;
  }

  ngOnInit(): void 
  {
  }

  setType(type : DisplayType)
  {
    this.displayType = type;
  }
}
