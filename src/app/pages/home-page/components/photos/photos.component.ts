import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/shared/interfaces/Photo';
import { DisplayType } from '../../enumerations/display-type';
import { PhotoService } from '../../../../../shared/services/photo.service';
import { Subscription } from 'rxjs';
import { IterateImages } from 'src/shared/enumerations/iterate-images';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loading : boolean;
  back : boolean = false;
  currentPart : number;
  parts : number ;
  forward: boolean = false;
  subscribtion!: Subscription;
  displayTypeEnum = DisplayType;
  photos: Photo[] | undefined;
  photosToDisplay : Photo[] | undefined;

  @Input() displayType : DisplayType | undefined;
  
  constructor(private photosService: PhotoService )
  {
    if(this.displayType === undefined)
      this.displayType = this.displayTypeEnum.GRID;
    this.loading = true;
    this.parts = 0;
    this.currentPart = 0;
  }

  ngOnInit(): void {
    this.subscribtion = this.photosService.getPhotos().subscribe({
      next: photos => {
        this.photos = photos;
        this.loading = false;

        if(this.photos.length> 24)
        {
          this.forward = true;
          this.photosToDisplay = [...this.photos.slice(0,24)];

          //:TODO PARSE TO INT PARTS!
          this.parts = this.photos.length / 24;
          if(this.photos.length % 2 !== 0)
            this.parts++;
        }
        else 
        {
          this.photosToDisplay = this.photos;
        }
      },
      error: error => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  move(direction: IterateImages)
  {
    if(this.photos)
    {
      if(direction === IterateImages.BACK)
      {
        if(this.currentPart === 0)
        return;

        this.currentPart--;

        if(this.currentPart !== 0)
        {
          this.forward = true
          this.back = true;
        }

        else if(this.currentPart === 0)
        {
          this.back = false;
        }
      }
    

      if(direction === IterateImages.FORWARD)
      {
        if(this.currentPart === this.parts-1)
          return;
        
        this.currentPart++;

        if(this.currentPart !== this.parts-1)
        {
          this.forward = true
          this.back = true;
        }

        else if(this.currentPart === this.parts-1)
        {
          this.forward = false;
        }
      }
  
      let limit = this.currentPart*24+24
    
      if(limit >= this.photos.length)
        limit = this.photos.length-1;
    
    this.photosToDisplay = this.photos?.slice(this.currentPart*24,limit);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
})

    }
  }

}
