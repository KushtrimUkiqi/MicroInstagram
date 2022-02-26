import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { PhotoComponent } from './components/photo/photo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTypeComponent } from './components/display-type/display-type.component';
import { PhotosComponent } from './components/photos/photos.component';




@NgModule({
  declarations: [
    HomePageComponent,
    PhotoComponent,
    DisplayTypeComponent,
    PhotosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {path: '' , component: HomePageComponent}
    ])
  ]
  // providers: [
  //   {provide: PhotosService , useClass : PhotosServiceImpl}
  // ]
})
export class HomePageModule { }
