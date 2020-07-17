import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExternalArticlePageComponent } from './add-external-article-page.component';

describe('AddExternalArticlePageComponent', () => {
  let component: AddExternalArticlePageComponent;
  let fixture: ComponentFixture<AddExternalArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExternalArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExternalArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
