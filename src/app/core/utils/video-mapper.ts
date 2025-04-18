import { VideoVisibilityEnum } from '../../shared/enums/enums';
import { MockVideo } from '../../shared/models/mock-video.model';
import { Thumbnail, Video } from '../../shared/models/video.model';
import { YouTubeVideo } from '../../shared/models/youtube-video.model';

/**
 * Maps a YouTubeVideo object to a Video object.
 * @param youtubeVideo The YouTubeVideo object to map.
 * @returns A Video object with properties mapped from the YouTubeVideo.
 */
export function mapYouTubeVideoToVideo(youtubeVideo: YouTubeVideo): Video {
  return new Video({
    id: youtubeVideo.videoId,
    title: youtubeVideo.videoTitle,
    description: youtubeVideo.videoDescription,
    thumbnail: youtubeVideo.videoThumbnail,
    visibility:
      youtubeVideo.videoVisibility === 'Public'
        ? VideoVisibilityEnum.PUBLIC
        : VideoVisibilityEnum.PRIVATE,
    author: youtubeVideo.videoAuthor,
    uploadDate: youtubeVideo.videoPostedOn,
  });
}

/**
 * Maps a MockVideo object to a Video object.
 * @param mockVideo The MockVideo object to map.
 * @returns A Video object with properties mapped from the MockVideo.
 */
export function mapMockVideoToVideo(mockVideo: MockVideo): Video {
  return new Video({
    id: mockVideo.id,
    title: mockVideo.title,
    description: mockVideo.description,
    thumbnail: new Thumbnail({
      url: mockVideo.thumbnail,
      height: 360,
      width: 480,
    }),
    visibility:
      mockVideo.visibility === 'public' ? VideoVisibilityEnum.PUBLIC : VideoVisibilityEnum.PRIVATE,
    author: mockVideo.author,
    uploadDate: mockVideo.uploadDate,
  });
}
