import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsPageComponent } from './join-us-page.component';

describe('JoinUsPageComponent', () => {
  let component: JoinUsPageComponent;
  let fixture: ComponentFixture<JoinUsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
