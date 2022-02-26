import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTypeComponent } from './display-type.component';

describe('DisplayTypeComponent', () => {
  let component: DisplayTypeComponent;
  let fixture: ComponentFixture<DisplayTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
