import { TestBed } from '@angular/core/testing';

import { EventPutService } from './event-put.service';

describe('EventPutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventPutService = TestBed.get(EventPutService);
    expect(service).toBeTruthy();
  });
});
