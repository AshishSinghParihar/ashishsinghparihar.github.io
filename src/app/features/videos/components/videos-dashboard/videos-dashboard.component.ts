import { Component, OnInit } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../video-card/video-card.component';

@Component({
  selector: 'app-videos-dashboard',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './videos-dashboard.component.html',
  styleUrl: './videos-dashboard.component.scss',
})
export class VideosDashboardComponent implements OnInit {
  public videos: Video[] = [];

  constructor(private readonly videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.fetchVideos().subscribe({
      next: (videos: Video[]) => {
        this.videos = videos;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
