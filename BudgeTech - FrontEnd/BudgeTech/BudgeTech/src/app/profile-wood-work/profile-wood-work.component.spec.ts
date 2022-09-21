import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWoodWorkComponent } from './profile-wood-work.component';

describe('ProfileWoodWorkComponent', () => {
  let component: ProfileWoodWorkComponent;
  let fixture: ComponentFixture<ProfileWoodWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWoodWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWoodWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
