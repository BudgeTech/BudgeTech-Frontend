import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWoodWorkerpasswordComponent } from './register-wood-workerpassword.component';

describe('RegisterWoodWorkerpasswordComponent', () => {
  let component: RegisterWoodWorkerpasswordComponent;
  let fixture: ComponentFixture<RegisterWoodWorkerpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWoodWorkerpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWoodWorkerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
