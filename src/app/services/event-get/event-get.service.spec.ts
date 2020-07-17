import { TestBed } from '@angular/core/testing';

import { EventGetService } from './event-get.service';

describe('EventGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventGetService = TestBed.get(EventGetService);
    expect(service).toBeTruthy();
  });
});
