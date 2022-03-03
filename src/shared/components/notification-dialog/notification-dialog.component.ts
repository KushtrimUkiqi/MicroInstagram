import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  @Input()  notificationText : string;
  @Input()  displayNotification : boolean;
  @Output() notificationResult  = new EventEmitter<boolean>();

  constructor() 
  {
    this.notificationText  = "";
    this.displayNotification = false;
  }

  ngOnInit(): void {
  }

  closeNotification()
  {
    this.displayNotification = false;
  }

  openNotification()
  {
    this.displayNotification = true;
  }

}
