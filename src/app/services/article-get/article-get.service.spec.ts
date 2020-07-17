import { TestBed } from '@angular/core/testing';

import { ArticleGetService } from './article-get.service';

describe('ArticleGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleGetService = TestBed.get(ArticleGetService);
    expect(service).toBeTruthy();
  });
});
