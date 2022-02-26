import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PhotoComponent } from './pages/home-page/components/photo/photo.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    ErrorPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    RouterModule.forRoot([
      {path: 'photo/:id' ,  component: DetailsPageComponent},
      {path: '**' ,         component: ErrorPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
