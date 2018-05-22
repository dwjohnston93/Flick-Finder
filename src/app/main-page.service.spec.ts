import { TestBed, inject } from '@angular/core/testing';

import { MainPageService } from './main-page.service';

describe('MainPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageService]
    });
  });

  it('should be created', inject([MainPageService], (service: MainPageService) => {
    expect(service).toBeTruthy();
  }));
});
