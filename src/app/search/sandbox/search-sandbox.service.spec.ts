import { TestBed, inject } from '@angular/core/testing';

import { SearchSandboxService } from './search-sandbox.service';

describe('SearchSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchSandboxService]
    });
  });

  it('should be created', inject([SearchSandboxService], (service: SearchSandboxService) => {
    expect(service).toBeTruthy();
  }));
});
