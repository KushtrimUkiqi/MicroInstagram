import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DisplayType } from '../../enumerations/display-type';

@Component({
  selector: 'app-display-type',
  templateUrl: './display-type.component.html',
  styleUrls: ['./display-type.component.css']
})
export class DisplayTypeComponent implements OnInit {

  displayGridImageURL : string;
  displayVerticallyImageURL : string;
  displayTypeEnum = DisplayType;
  @Input() displayType : DisplayType | undefined;
  @Output() displayTypeChange  = new EventEmitter<DisplayType>();

  constructor() 
  {
    if(this.displayType === undefined)
      this.displayType = this.displayTypeEnum.GRID;

    this.displayGridImageURL = 'assets/images/display-type-grid.svg';
    this.displayVerticallyImageURL = 'assets/images/display-type-vertically.svg';
   }


   setType(displayType : DisplayType ): void
  {
    if(this.displayType === displayType)
      return;

    this.displayType = displayType;
    this.displayTypeChange.emit(this.displayType);
  }

  ngOnInit(): void {
  }
}
