import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonuthomeComponent } from './donuthome.component';

describe('DonuthomeComponent', () => {
  let component: DonuthomeComponent;
  let fixture: ComponentFixture<DonuthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonuthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonuthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
