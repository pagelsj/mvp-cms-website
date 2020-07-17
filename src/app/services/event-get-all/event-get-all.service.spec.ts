import { TestBed } from '@angular/core/testing';

import { EventGetAllService } from './event-get-all.service';

describe('EventGetAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventGetAllService = TestBed.get(EventGetAllService);
    expect(service).toBeTruthy();
  });
});
