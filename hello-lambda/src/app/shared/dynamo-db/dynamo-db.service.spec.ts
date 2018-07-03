import { TestBed, inject } from '@angular/core/testing';

import { DynamoDbService } from './dynamo-db.service';

describe('DynamoDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamoDbService]
    });
  });

  it('should be created', inject([DynamoDbService], (service: DynamoDbService) => {
    expect(service).toBeTruthy();
  }));
});
