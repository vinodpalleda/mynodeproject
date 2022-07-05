import { TestBed } from '@angular/core/testing';

import { RolesRightsGuard } from './roles-rights.guard';

describe('RolesRightsGuard', () => {
  let guard: RolesRightsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolesRightsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
