import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpecificWoodWorkComponent } from './search-specific-wood-work.component';

describe('SearchSpecificWoodWorkComponent', () => {
  let component: SearchSpecificWoodWorkComponent;
  let fixture: ComponentFixture<SearchSpecificWoodWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSpecificWoodWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSpecificWoodWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
