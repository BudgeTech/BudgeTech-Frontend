import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWoodWorkerComponent } from './register-wood-worker.component';

describe('RegisterWoodWorkerComponent', () => {
  let component: RegisterWoodWorkerComponent;
  let fixture: ComponentFixture<RegisterWoodWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWoodWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWoodWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
