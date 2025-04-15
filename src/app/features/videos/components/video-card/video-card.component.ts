import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  @Input() video!: Video;

  constructor(private router: Router) {}

  openVideo() {
    this.router.navigate(['videos/watch', this.video.id]);
  }
}
