import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceAndLinksPageComponent } from './advice-and-links-page.component';

describe('AdviceAndLinksPageComponent', () => {
  let component: AdviceAndLinksPageComponent;
  let fixture: ComponentFixture<AdviceAndLinksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceAndLinksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceAndLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
