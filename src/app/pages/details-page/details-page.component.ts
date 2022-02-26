import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Photo } from 'src/shared/interfaces/Photo';
import { PhotoService } from '../../../shared/services/photo.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit,OnDestroy {

  id : number;
  subscribtion ! : Subscription;
  photo: Photo | undefined;

  constructor(private route : ActivatedRoute , private photoService : PhotoService)
  {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void 
  {
    this.subscribtion = this.photoService.getPhoto(this.id).subscribe({
      next:  photo =>
      {
        this.photo = photo;
      },
      error: error => console.log(error)
    })
  }
    ngOnDestroy(): void 
  {
    this.subscribtion.unsubscribe();
  }


}
