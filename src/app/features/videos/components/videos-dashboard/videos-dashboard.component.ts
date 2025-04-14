import { Component, OnInit } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-videos-dashboard',
  standalone: true,
  imports: [],
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
