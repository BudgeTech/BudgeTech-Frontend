import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLivingComponent } from './area-living.component';

describe('AreaLivingComponent', () => {
  let component: AreaLivingComponent;
  let fixture: ComponentFixture<AreaLivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaLivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
