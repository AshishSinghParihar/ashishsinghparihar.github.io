import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, Observable, of, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Video } from '../../../shared/models/video.model';
import { VideoSourceEnum, VideoVisibilityEnum } from '../../../shared/enums/enums';
import { MockVideo } from '../../../shared/models/mock-video.model';
import { YouTubeVideo } from '../../../shared/models/youtube-video.model';
import { mapMockVideoToVideo, mapYouTubeVideoToVideo } from '../../../core/utils/video-mapper';
import { VideoService } from './video.service';

/**
 * Service for fetching video data from different sources.
 */
@Injectable({
  providedIn: 'root',
})
export class VideoHttpService {
  /**
   * Constructs a VideoHttpService.
   * @param http The HTTP client used for making API requests.
   */
  constructor(
    private readonly http: HttpClient,
    private readonly videoService: VideoService,
  ) {}

  /**
   * Fetches videos from the configured source.
   * @returns An observable of an array of Video objects.
   */
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

  /**
   * Fetches YouTube videos based on a query.
   * @param query The search query for YouTube videos.
   * @param count The number of videos to fetch.
   * @returns An observable of an array of YouTubeVideo objects.
   */
  fetchYoutubeVideos(query = 'education videos', count: number = 15): Observable<YouTubeVideo[]> {
    const url = environment.ytSearchApi;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', count)
      .set('q', query)
      .set('key', environment.youTubeApiKey)
      .set('pageToken', this.videoService.nextPageToken);

    return this.http
      .get<any>(url, { params })
      .pipe(tap((res: any) => (this.videoService.nextPageToken = res.nextPageToken)))
      .pipe(
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

  fetchVideoDetails(videoId: string): Observable<Video[]> {
    if (environment.videoSource === VideoSourceEnum.YOUTUBE) {
      return this.fetchYouTubeVideoDetails(videoId).pipe(
        map((res: any) => res.map((item: YouTubeVideo) => mapYouTubeVideoToVideo(item))),
      );
    } else if (environment.videoSource === VideoSourceEnum.MOCK_API) {
      return this.fetchMockApiVideos().pipe(
        map((res: any) => res.map((item: MockVideo) => mapMockVideoToVideo(item))),
      );
    }
    return of([]);
  }

  fetchYouTubeVideoDetails(videoId: string) {
    const url = environment.ytVideosApi;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('id', videoId)
      .set('key', environment.youTubeApiKey);

    return this.http
      .get<YouTubeVideo>(url, {
        params,
      })
      .pipe(tap((res: any) => console.log('Video Details::', res)))
      .pipe(
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

  /**
   * Fetches videos from a mock API.
   * @returns An observable of an array of MockVideo objects.
   */
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
