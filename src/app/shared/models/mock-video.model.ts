/**
 * Interface representing a mock video.
 */
export interface MockVideo {
  /**
   * The unique identifier for the mock video.
   */
  id: string;

  /**
   * The title of the mock video.
   */
  title: string;

  /**
   * The description of the mock video (optional).
   */
  description?: string;

  /**
   * The URL of the thumbnail image for the mock video.
   */
  thumbnail: string;

  /**
   * The visibility status of the mock video.
   */
  visibility: string;

  /**
   * The author of the mock video (optional).
   */
  author?: string;

  /**
   * The upload date of the mock video (optional).
   */
  uploadDate?: string;
}
