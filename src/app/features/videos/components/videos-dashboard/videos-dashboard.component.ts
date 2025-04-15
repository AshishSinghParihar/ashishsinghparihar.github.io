import { Component, HostListener, OnInit } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { VideoHttpService } from '../../services/video-http.service';
import { VideoCardComponent } from '../video-card/video-card.component';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-videos-dashboard',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './videos-dashboard.component.html',
  styleUrl: './videos-dashboard.component.scss',
})
export class VideosDashboardComponent implements OnInit {
  private loadingVideos: boolean = false;

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

  constructor(
    private readonly videoHttpService: VideoHttpService,
    public videoService: VideoService,
  ) {}

  ngOnInit(): void {
    if (this.videoService.videos().length === 0) {
      this.loadVideos();
    }
  }

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
