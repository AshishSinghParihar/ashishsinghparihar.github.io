import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { VideoHttpService } from './video-http.service';

describe('VideoHttpService', () => {
  let service: VideoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch())],
    });
    service = TestBed.inject(VideoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
