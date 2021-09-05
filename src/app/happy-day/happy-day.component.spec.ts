import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyDayComponent } from './happy-day.component';

describe('HappyDayComponent', () => {
  let component: HappyDayComponent;
  let fixture: ComponentFixture<HappyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
