import { Injectable, signal } from '@angular/core';

import { Video } from '../../../shared/models/video.model';

/**
 * Service for managing video data.
 * Provides a signal to store and update the list of videos.
 */
@Injectable({
  providedIn: 'root',
})
export class VideoService {
  /**
   * Signal to store the list of videos.
   * This signal can be updated with new video data.
   */
  public videos = signal<Video[]>([]);

  /**
   * Constructs a VideoService.
   * Initializes the video signal.
   */
  constructor() {}
}
