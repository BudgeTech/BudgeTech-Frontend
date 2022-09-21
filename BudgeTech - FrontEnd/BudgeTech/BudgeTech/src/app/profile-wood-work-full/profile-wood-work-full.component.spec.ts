import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWoodWorkFullComponent } from './profile-wood-work-full.component';

describe('ProfileWoodWorkFullComponent', () => {
  let component: ProfileWoodWorkFullComponent;
  let fixture: ComponentFixture<ProfileWoodWorkFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWoodWorkFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWoodWorkFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
