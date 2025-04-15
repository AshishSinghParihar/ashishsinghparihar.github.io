import { Thumbnail } from './video.model';

/**
 * Interface representing a YouTube video.
 */
export interface YouTubeVideo {
  /**
   * The unique identifier for the YouTube video.
   */
  videoId: string;

  /**
   * The title of the YouTube video.
   */
  videoTitle: string;

  /**
   * The description of the YouTube video (optional).
   */
  videoDescription?: string;

  /**
   * The thumbnail image of the YouTube video.
   */
  videoThumbnail: Thumbnail;

  /**
   * The visibility status of the YouTube video.
   */
  videoVisibility: string;

  /**
   * The author of the YouTube video.
   */
  videoAuthor: string;

  /**
   * The date the YouTube video was posted.
   */
  videoPostedOn: string;
}
