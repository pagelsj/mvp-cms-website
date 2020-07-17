import { TestBed } from '@angular/core/testing';

import { ArticlePutService } from './article-put.service';

describe('ArticlePutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlePutService = TestBed.get(ArticlePutService);
    expect(service).toBeTruthy();
  });
});
