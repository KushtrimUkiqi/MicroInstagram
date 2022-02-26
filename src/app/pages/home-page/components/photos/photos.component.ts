import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/shared/interfaces/Photo';
import { DisplayType } from '../../enumerations/display-type';
import { PhotoService } from '../../../../../shared/services/photo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  subscribtion!: Subscription;
  displayTypeEnum = DisplayType;
  photos: Photo[] | undefined;

  @Input() displayType : DisplayType | undefined;
  
  constructor(private photosService: PhotoService )
  {
    if(this.displayType === undefined)
    this.displayType = this.displayTypeEnum.GRID;
  }

  ngOnInit(): void {
    this.subscribtion = this.photosService.getPhotos().subscribe({
      next: photos => {
        this.photos = photos;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
