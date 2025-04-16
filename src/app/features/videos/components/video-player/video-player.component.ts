import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

import { YouTubePlayer } from '@angular/youtube-player';

/**
 * Component for playing YouTube videos.
 */
@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayer, MatIconModule, MatFabButton],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  /**
   * Service to interact with the browser's URL.
   */
  private location = inject(Location);

  /**
   * Service to handle navigation within the app.
   */
  private router = inject(Router);

  /**
   * The ID of the video to be played, extracted from the route parameters.
   */
  videoId = inject(ActivatedRoute).snapshot.paramMap.get('id')!;

  /**
   * Navigates back to the previous page in the browser's history.
   */
  goBack() {
    this.location.back();
  }

  /**
   * Navigates to the home page of the application.
   */
  goHome() {
    this.router.navigateByUrl('/');
  }
}
