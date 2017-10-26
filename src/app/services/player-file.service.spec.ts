import { TestBed, inject } from '@angular/core/testing';

import { PlayerFileService } from './player-file.service';

describe('PlayerFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerFileService]
    });
  });

  it('should be created', inject([PlayerFileService], (service: PlayerFileService) => {
    expect(service).toBeTruthy();
  }));
});
