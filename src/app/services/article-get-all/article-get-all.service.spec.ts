import { TestBed } from '@angular/core/testing';

import { ArticleGetAllService } from './article-get-all.service';

describe('ArticleGetAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleGetAllService = TestBed.get(ArticleGetAllService);
    expect(service).toBeTruthy();
  });
});
