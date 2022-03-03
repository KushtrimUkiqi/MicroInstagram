import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIteratorComponent } from './item-iterator.component';

describe('ItemIteratorComponent', () => {
  let component: ItemIteratorComponent;
  let fixture: ComponentFixture<ItemIteratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIteratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
