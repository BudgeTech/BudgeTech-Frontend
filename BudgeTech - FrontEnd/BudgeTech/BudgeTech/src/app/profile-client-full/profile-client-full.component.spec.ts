import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClientFullComponent } from './profile-client-full.component';

describe('ProfileClientFullComponent', () => {
  let component: ProfileClientFullComponent;
  let fixture: ComponentFixture<ProfileClientFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileClientFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileClientFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
