import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBComponent } from './info-b.component';

describe('InfoBComponent', () => {
  let component: InfoBComponent;
  let fixture: ComponentFixture<InfoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
