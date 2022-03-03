import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IterateImages } from 'src/shared/enumerations/iterate-images';

@Component({
  selector: 'app-item-iterator',
  templateUrl: './item-iterator.component.html',
  styleUrls: ['./item-iterator.component.css']
})
export class ItemIteratorComponent implements OnInit {

  backImageURL : string = 'assets/images/back.svg';
  forwardImageURL : string = 'assets/images/forward.svg';
  IterateImages  = IterateImages;
  @Input() back : boolean;
  @Input() forward: boolean;
  @Output() moveDirection = new EventEmitter<IterateImages>();

  constructor() { 
    this.back = false;
    this.forward = false;
  }

  ngOnInit(): void {
  }

  move(iterationDirection : IterateImages)
  {
    this.moveDirection.emit(iterationDirection);
  }

}
