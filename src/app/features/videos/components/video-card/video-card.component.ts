import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component representing a single video card.
 */
@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  /**
   * The video object to be displayed in the card.
   */
  @Input() video!: Video;

  /**
   * Constructs a VideoCardComponent.
   * @param router The Angular Router for navigation.
   */
  constructor(private router: Router) {}

  /**
   * Navigates to the video watch page.
   */
  openVideo() {
    this.router.navigate(['videos/watch', this.video.id]);
  }
}
