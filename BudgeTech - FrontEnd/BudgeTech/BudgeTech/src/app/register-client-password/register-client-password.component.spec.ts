import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientPasswordComponent } from './register-client-password.component';

describe('RegisterClientPasswordComponent', () => {
  let component: RegisterClientPasswordComponent;
  let fixture: ComponentFixture<RegisterClientPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClientPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClientPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
