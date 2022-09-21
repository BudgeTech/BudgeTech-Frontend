import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientAdressComponent } from './register-client-adress.component';

describe('RegisterClientAdressComponent', () => {
  let component: RegisterClientAdressComponent;
  let fixture: ComponentFixture<RegisterClientAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClientAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClientAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
