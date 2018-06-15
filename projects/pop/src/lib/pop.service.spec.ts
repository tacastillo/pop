import { TestBed, inject } from '@angular/core/testing';

import { PopService } from './pop.service';

describe('PopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopService]
    });
  });

  it('should be created', inject([PopService], (service: PopService) => {
    expect(service).toBeTruthy();
  }));
});
