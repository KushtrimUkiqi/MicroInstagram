import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddPhoto } from 'src/shared/interfaces/AddPhoto';
import { NotificationDialog } from 'src/shared/interfaces/NotificationDialog';
import { Photo } from 'src/shared/interfaces/Photo';
import { UpdatePhoto } from 'src/shared/interfaces/UpdatePhoto';
import { FormErrorObject } from 'src/shared/objects/FormErrorObject';
import { PhotoService } from 'src/shared/services/photo.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit,OnDestroy,NotificationDialog {

  id!: number;
  update: boolean = true;
  originalPhoto : Photo | undefined;
  photo : Photo | undefined;
  subscription! : Subscription;
  routeIdSubscription!: Subscription;
  photoAsFile : File | undefined;
  thumbnailPhotoAsFile: File | undefined; 
  formErrorObject : FormErrorObject;
  loading: boolean = true;
  displayNotificationText: string;
  displayNotification: boolean;
  

  constructor(private photoService: PhotoService,private route: ActivatedRoute) 
  {
    this.formErrorObject = new FormErrorObject() ;
    this.displayNotificationText = "";
    this.displayNotification = false;
  }
 
  closeNotificationDialog(): void {
    this.displayNotification = false;
    this.displayNotificationText = "";
  }


  ngOnInit(): void 
  {
    this.routeIdSubscription = this.route.paramMap.subscribe({
      next: params => {
        this.id = Number(params.get('id'));
        this.getProduct();
      },
      error: error => alert(error)
    });
  }

  getProduct():void
  {
    
    if(this.id!==0)
    {
      this.photoService.getPhoto(this.id).subscribe({
      next: photo => {this.photo = photo; this.originalPhoto = JSON.parse(JSON.stringify(this.photo)); this.loading = false;}
      });
    }

    else 
    {
      this.photo = {albumId: 0, id: 0,title: "",url: "",thumbnailUrl : ""};
      this.originalPhoto = this.photo;
      this.update = false;
      this.loading = false; 
    }
  }

  ngOnDestroy(): void 
  {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

  generateAddPhotoInstance() : AddPhoto
  {
    return {
      albumId: this.photo?.albumId ,
      title: this.photo?.title,
      thumbnailUrl : this.thumbnailPhotoAsFile,
      img: this.photoAsFile
    }
  }

  generateUpdatePhotoInstance(): UpdatePhoto
  {
    return {
      id: this.photo?.id,
      albumId: this.photo?.albumId,
      title: this.photo?.title,
      url: this.photoAsFile || this.photo?.url,
      thumbnailUrl : this.thumbnailPhotoAsFile || this.photo?.thumbnailUrl
    }
  }

  onThumbnailFileSelected(event : any) : void 
  {
    this.thumbnailPhotoAsFile =  event.target.files[0];
  }

  onImageFileSelected(event : any) : void 
  {
    this.photoAsFile =  event.target.files[0];
  }

  displayErrorForm() : void
  {
    this.formErrorObject = new FormErrorObject(
      this.photo?.albumId === 0 || this.photo?.albumId === undefined ,
      this.photo?.title.trim() === "" || this.photo?.title === undefined,
      this.photoAsFile === undefined || this.photoAsFile.size === 0 ,
      this.thumbnailPhotoAsFile === undefined || this.thumbnailPhotoAsFile .size === 0
    );
  }

  validate() : boolean
  { 
   
    this.formErrorObject = new FormErrorObject();

    if(this.photo !== undefined && this.photo.albumId!== 0 && this.photo.title != "" && this.photoAsFile !== undefined && this.thumbnailPhotoAsFile !== undefined)
      {
        return true;
      }
   
      this.displayErrorForm();
      return false;
      
  }

  reset()
  {
    if(this.update)
    {
      this.photo = this.originalPhoto;
      return;
    }

      this.photo = {albumId: 0, id: 0,title: "",url: "",thumbnailUrl : ""};
      this.thumbnailPhotoAsFile = undefined;
      this.photoAsFile = undefined;
      this.formErrorObject = new FormErrorObject();
  }
  

  submit() : void
  {

    if(this.update)
    this.photoService.updatePhoto(this.generateUpdatePhotoInstance()).subscribe({
      next: success => {this.displayNotification = true; this.displayNotificationText = "Photo is up to date";},
      error: errorMsg => {this.displayNotification = true; this.displayNotificationText = "Something happend , could not update the photo";}
    })

    else if(this.validate()) 
    this.photoService.addPhoto(this.generateAddPhotoInstance()).subscribe({
      next: success => {this.displayNotification = true; this.displayNotificationText = "Photo added successfully";},
      error: errorMsg => {this.displayNotification = true; this.displayNotificationText = "Something happend , could not update the photo";}
    });


    // if(this.photo)
    // this.photoService.addPhoto(this.photo).subscribe({
    //   next: photo => alert(JSON.stringify(photo)),
    //   error: errorMsg => alert("error")
    // })
  }
}
