import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutdetailComponent } from './donutdetail.component';

describe('DonutdetailComponent', () => {
  let component: DonutdetailComponent;
  let fixture: ComponentFixture<DonutdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
