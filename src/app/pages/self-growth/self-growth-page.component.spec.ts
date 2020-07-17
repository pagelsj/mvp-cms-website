import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfGrowthPageComponent } from './self-growth-page.component';

describe('SelfGrowthPageComponent', () => {
  let component: SelfGrowthPageComponent;
  let fixture: ComponentFixture<SelfGrowthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfGrowthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfGrowthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
