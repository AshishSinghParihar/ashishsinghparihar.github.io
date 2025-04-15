import { Injectable, signal } from '@angular/core';

import { Video } from '../../../shared/models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public videos = signal<Video[]>([]);

  constructor() {}
}
