import { TestBed, inject } from '@angular/core/testing';

import { SchooleventsService } from './schoolevents.service';

describe('SchooleventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchooleventsService]
    });
  });

  it('should be created', inject([SchooleventsService], (service: SchooleventsService) => {
    expect(service).toBeTruthy();
  }));
});
