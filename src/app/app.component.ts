import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { VideoService } from './features/videos/services/video.service';
import { Video } from './shared/models/video.model';

/**
 * This is the AppComponent
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'youtube-lite';
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
