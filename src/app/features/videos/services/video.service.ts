import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Video } from '../../../shared/models/video.model';
import { VideoSourceEnum, VideoVisibilityEnum } from '../../../shared/enums/enums';
import { MockVideo } from '../../../shared/models/mock-video.model';
import { YouTubeVideo } from '../../../shared/models/youtube-video.model';
import { mapMockVideoToVideo, mapYouTubeVideoToVideo } from '../../../core/utils/video-mapper';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private readonly http: HttpClient) {}

  fetchVideos(): Observable<Video[]> {
    if (environment.videoSource === VideoSourceEnum.YOUTUBE) {
      return this.fetchYoutubeVideos().pipe(
        map((res: any) => res.map((item: YouTubeVideo) => mapYouTubeVideoToVideo(item))),
      );
    } else if (environment.videoSource === VideoSourceEnum.MOCK_API) {
      return this.fetchMockApiVideos().pipe(
        map((res: any) => res.map((item: MockVideo) => mapMockVideoToVideo(item))),
      );
    }
    return of([]);
  }

  fetchYoutubeVideos(query = 'education videos'): Observable<YouTubeVideo[]> {
    const url = environment.youTubeApiUrl
      .replace('PART', 'snippet')
      .replace('QUERY', query)
      .replace('COUNT', (15).toString())
      .replace('API_KEY', environment.youTubeApiKey);

    return this.http.get<any>(url).pipe(
      map((res: any) =>
        res.items.map(
          (item: any) =>
            ({
              videoId: item.id.videoId,
              videoTitle: item.snippet.title,
              videoDescription: item.snippet.description,
              videoThumbnail: item.snippet.thumbnails.high,
              videoVisibility: VideoVisibilityEnum.PUBLIC,
              videoAuthor: item.snippet.channelTitle,
              videoPostedOn: item.snippet.publishTime,
            }) as YouTubeVideo,
        ),
      ),
    );
  }

  fetchMockApiVideos(): Observable<MockVideo[]> {
    const url = environment.mockVideoApiUrl;

    return this.http.get<any>(url).pipe(
      map((res: any) =>
        res.map(
          (item: any) =>
            ({
              id: item.id,
              title: item.title,
              description: item.description,
              thumbnail: item.thumbnail,
              visibility: VideoVisibilityEnum.PUBLIC,
              author: item.author,
              uploadDate: item.uploadDate,
            }) as MockVideo,
        ),
      ),
    );
  }
}
