import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  private location = inject(Location);
  private router = inject(Router);
  videoId = inject(ActivatedRoute).snapshot.paramMap.get('id')!;

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
}
