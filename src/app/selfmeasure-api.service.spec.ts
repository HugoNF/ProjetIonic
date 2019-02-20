import { TestBed } from '@angular/core/testing';

import { SelfmeasureApiService } from './selfmeasure-api.service';

describe('SelfmeasureApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfmeasureApiService = TestBed.get(SelfmeasureApiService);
    expect(service).toBeTruthy();
  });
});
