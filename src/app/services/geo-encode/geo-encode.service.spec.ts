import { TestBed } from '@angular/core/testing';

import { GeoEncodeService } from './geo-encode.service';

describe('GeoEncodeService', () => {
  let service: GeoEncodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoEncodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
