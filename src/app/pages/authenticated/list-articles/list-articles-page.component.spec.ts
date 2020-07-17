import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesPageComponent } from './list-articles-page.component';

describe('ListArticlesPageComponent', () => {
  let component: ListArticlesPageComponent;
  let fixture: ComponentFixture<ListArticlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArticlesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
