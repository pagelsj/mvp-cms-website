import { TestBed } from '@angular/core/testing';

import { ArticleDeleteService } from './article-delete.service';

describe('ArticleDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleDeleteService = TestBed.get(ArticleDeleteService);
    expect(service).toBeTruthy();
  });
});
