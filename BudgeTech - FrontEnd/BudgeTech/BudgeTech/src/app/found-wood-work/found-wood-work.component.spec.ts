import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundWoodWorkComponent } from './found-wood-work.component';

describe('FoundWoodWorkComponent', () => {
  let component: FoundWoodWorkComponent;
  let fixture: ComponentFixture<FoundWoodWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundWoodWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundWoodWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
