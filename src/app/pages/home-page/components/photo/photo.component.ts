import { Component, Input, OnInit } from '@angular/core';
import { DisplayType } from '../../enumerations/display-type';
import { Photo } from '../../../../../shared/interfaces/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  displayTypeEnum = DisplayType;
  @Input() photo: Photo | undefined;
  @Input() displayType : DisplayType | undefined;

  constructor() 
  {}

  ngOnInit(): void {
    if(this.displayType === undefined)
      this.displayType = DisplayType.GRID;
  }

}
