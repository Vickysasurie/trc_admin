import { TestBed } from '@angular/core/testing';

import { BackendcallService } from './backendcall.service';

describe('BackendcallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendcallService = TestBed.get(BackendcallService);
    expect(service).toBeTruthy();
  });
});
