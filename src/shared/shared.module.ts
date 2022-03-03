import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ItemIteratorComponent } from './components/item-iterator/item-iterator.component';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ItemIteratorComponent,
    NotificationDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ItemIteratorComponent,
    NotificationDialogComponent
  ]
})
export class SharedModule { }
