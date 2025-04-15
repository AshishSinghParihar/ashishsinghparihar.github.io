import { Component, HostListener, OnInit } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { VideoHttpService } from '../../services/video-http.service';
import { VideoCardComponent } from '../video-card/video-card.component';
import { VideoService } from '../../services/video.service';

/**
 * Component for displaying a dashboard of videos.
 */
@Component({
  selector: 'app-videos-dashboard',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './videos-dashboard.component.html',
  styleUrl: './videos-dashboard.component.scss',
})
export class VideosDashboardComponent implements OnInit {
  /**
   * Indicates whether videos are currently being loaded.
   */
  private loadingVideos: boolean = false;

  /**
   * Host listener for window scroll events.
   * Loads more videos when the user scrolls to the bottom of the page.
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    const videoElements = document.getElementsByClassName('video-card');
    const lastVideoElement = videoElements[videoElements.length - 1];
    if (lastVideoElement) {
      const rect = lastVideoElement.getBoundingClientRect();
      const isVisible = rect.bottom <= window.innerHeight;
      if (isVisible && !this.loadingVideos) {
        this.loadVideos();
      }
    }
  }

  /**
   * Constructor for VideosDashboardComponent.
   * @param videoHttpService Service for fetching videos from the server.
   * @param videoService Service for managing video data.
   */
  constructor(
    private readonly videoHttpService: VideoHttpService,
    public videoService: VideoService,
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes video loading.
   */
  ngOnInit(): void {
    if (this.videoService.videos().length === 0) {
      this.loadVideos();
    }
  }

  /**
   * Loads videos from the server and updates the video list.
   */
  private loadVideos() {
    if (this.loadingVideos) return;
    this.loadingVideos = true;

    this.videoHttpService.fetchVideos().subscribe({
      next: (videos: Video[]) => {
        this.videoService.videos.update((currentVideos) => [...currentVideos, ...videos]);
        this.loadingVideos = false;
      },
      error: (error: any) => {
        console.log(error);
        this.loadingVideos = false;
      },
    });
  }
}
