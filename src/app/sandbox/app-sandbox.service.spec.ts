import { TestBed, inject } from '@angular/core/testing';

import { AppSandboxService } from './app-sandbox.service';

describe('AppSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSandboxService]
    });
  });

  it('should be created', inject([AppSandboxService], (service: AppSandboxService) => {
    expect(service).toBeTruthy();
  }));
});
