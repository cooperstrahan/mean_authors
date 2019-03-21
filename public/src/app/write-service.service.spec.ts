import { TestBed } from '@angular/core/testing';

import { WriteServiceService } from './write-service.service';

describe('WriteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WriteServiceService = TestBed.get(WriteServiceService);
    expect(service).toBeTruthy();
  });
});
