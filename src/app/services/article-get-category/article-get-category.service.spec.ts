import { TestBed } from '@angular/core/testing';

import { ArticleGetCategoryService } from './article-get-category.service';

describe('ArticleGetCategoryService', () => {
  let service: ArticleGetCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleGetCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
