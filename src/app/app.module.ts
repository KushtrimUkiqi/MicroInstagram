import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { FormsModule, NgModel } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    ErrorPageComponent,
    NavBarComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'photo/:id' ,  component: DetailsPageComponent},
      {path: 'edit/photo/:id' ,  component: EditPageComponent},
      {path: '**' , component: ErrorPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
