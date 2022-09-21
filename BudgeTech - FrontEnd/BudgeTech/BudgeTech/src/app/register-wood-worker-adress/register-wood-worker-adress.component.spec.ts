import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWoodWorkerAdressComponent } from './register-wood-worker-adress.component';

describe('RegisterWoodWorkerAdressComponent', () => {
  let component: RegisterWoodWorkerAdressComponent;
  let fixture: ComponentFixture<RegisterWoodWorkerAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWoodWorkerAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWoodWorkerAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
