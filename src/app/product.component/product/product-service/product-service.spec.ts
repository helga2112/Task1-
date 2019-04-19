import { TestBed } from '@angular/core/testing';

import { GetProductService } from './product-service.service';

describe('GetProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductService = TestBed.get(GetProductService);
    expect(service).toBeTruthy();
  });
});
