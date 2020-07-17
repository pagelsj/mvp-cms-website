import { TestBed } from '@angular/core/testing';

import { ProfilePostService } from './profile-post.service';

describe('ProfilePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePostService = TestBed.get(ProfilePostService);
    expect(service).toBeTruthy();
  });
});
