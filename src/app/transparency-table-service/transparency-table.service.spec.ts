import { TestBed } from '@angular/core/testing';

import { TransparencyTableService } from './transparency-table.service';

describe('TransparencyTableService', () => {
  let service: TransparencyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransparencyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
