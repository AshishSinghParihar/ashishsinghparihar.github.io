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
   * Token for fetching the next page of YouTube videos.
   * Used to paginate through video results.
   */
  private _nextPageToken = '';
  /**
   * Signal to store the list of videos.
   * This signal can be updated with new video data.
   */
  public videos = signal<Video[]>([]);
  /**
   * Signal to store the current search query.
   * This signal can be updated with new search terms.
   */
  public searchQuery = signal<string>('');

  /**
   * Constructs a VideoService.
   * Initializes the video signal.
   */
  constructor() {}

  /**
   * Gets the token for fetching the next page of YouTube videos.
   * @returns The current next page token.
   */
  public get nextPageToken(): string {
    return this._nextPageToken;
  }

  /**
   * Sets the token for fetching the next page of YouTube videos.
   * @param token The new next page token.
   */
  public set nextPageToken(token: string) {
    this._nextPageToken = token;
  }
}
