import { TestBed } from '@angular/core/testing';

import { DataMiningService } from './data-mining.service';

describe('DataMiningService', () => {
  let service: DataMiningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMiningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
