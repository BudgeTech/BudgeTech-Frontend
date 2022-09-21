import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWoodWorkercontactComponent } from './register-wood-workercontact.component';

describe('RegisterWoodWorkercontactComponent', () => {
  let component: RegisterWoodWorkercontactComponent;
  let fixture: ComponentFixture<RegisterWoodWorkercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWoodWorkercontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWoodWorkercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
