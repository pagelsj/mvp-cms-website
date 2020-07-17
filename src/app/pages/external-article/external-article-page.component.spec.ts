import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalArticlePageComponent } from './external-article-page.component';

describe('ExternalArticlePageComponent', () => {
  let component: ExternalArticlePageComponent;
  let fixture: ComponentFixture<ExternalArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
