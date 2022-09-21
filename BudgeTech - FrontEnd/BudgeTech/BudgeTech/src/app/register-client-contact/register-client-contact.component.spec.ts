import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientContactComponent } from './register-client-contact.component';

describe('RegisterClientContactComponent', () => {
  let component: RegisterClientContactComponent;
  let fixture: ComponentFixture<RegisterClientContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClientContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
