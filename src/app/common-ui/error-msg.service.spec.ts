import { TestBed, inject } from '@angular/core/testing';

import { ErrorMsgService } from './error-msg.service';

describe('ErrorMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMsgService]
    });
  });

  it('should be created', inject([ErrorMsgService], (service: ErrorMsgService) => {
    expect(service).toBeTruthy();
  }));
});
