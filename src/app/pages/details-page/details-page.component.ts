import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationDialog } from 'src/shared/interfaces/NotificationDialog';
import { Photo } from 'src/shared/interfaces/Photo';
import { PhotoService } from '../../../shared/services/photo.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit,OnDestroy,NotificationDialog {

  id : number;
  editImageURL : string;
  deleteImageURL : string;
  subscribtion ! : Subscription;
  photo: Photo | undefined;
  loading: boolean = true;
  deletePhotoDialogResult: boolean = false;
  displayNotification : boolean = false;
  displayNotificationText = "";

  constructor(private route : ActivatedRoute ,
               private photoService : PhotoService,
               private router: Router)
  {
    this.id = Number(route.snapshot.paramMap.get('id'));
    this.editImageURL = 'assets/images/edit.svg';
    this.deleteImageURL = 'assets/images/delete.svg'
  }

  ngOnInit(): void 
    {
      this.subscribtion = this.photoService.getPhoto(this.id).subscribe({
        next:  photo =>
        {
          this.photo = photo;
          this.loading = false;
        },
        error: error => console.log(error)
      });
    }

  ngOnDestroy(): void 
    {
      this.subscribtion.unsubscribe();
    }

  deletePhoto(): void
  {
    this.deletePhotoDialogResult = true;
  }

  deletePhotoDialog(result : boolean) : void
  {
    this.deletePhotoDialogResult = false;
    if(result) this.deletePhotoDialogTrue();
  }

  deletePhotoDialogTrue():void
  {
    this.photoService.deletePhoto(this.id).subscribe({
      next: s => { this.displayNotification = true; this.displayNotificationText = "Photo is deleted successfully" },
      error: err => {this.displayNotification = true; this.displayNotificationText = "Something happened could not delete the photo!"}
    });  
  }

  closeNotificationDialog()
  {
    this.router.navigate(['']);
  }



}
