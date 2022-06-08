import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheackoutComponent } from './cheackout.component';

describe('CheackoutComponent', () => {
  let component: CheackoutComponent;
  let fixture: ComponentFixture<CheackoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheackoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheackoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
