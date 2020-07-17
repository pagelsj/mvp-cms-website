import { TestBed } from '@angular/core/testing';

import { TagGetService } from './tag-get.service';

describe('TagGetService', () => {
  let service: TagGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
