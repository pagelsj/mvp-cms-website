import { TestBed } from '@angular/core/testing';

import { EventPostService } from './event-post.service';

describe('EventPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventPostService = TestBed.get(EventPostService);
    expect(service).toBeTruthy();
  });
});
