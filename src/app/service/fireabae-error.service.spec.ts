import { TestBed } from '@angular/core/testing';

import { FireabaeErrorService } from './fireabae-error.service';

describe('FireabaeErrorService', () => {
  let service: FireabaeErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireabaeErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
