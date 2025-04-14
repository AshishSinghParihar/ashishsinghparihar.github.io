import { Thumbnail } from './video.model';

export interface YouTubeVideo {
  videoId: string;
  videoTitle: string;
  videoDescription?: string;
  videoThumbnail: Thumbnail;
  videoVisibility: string;
}
