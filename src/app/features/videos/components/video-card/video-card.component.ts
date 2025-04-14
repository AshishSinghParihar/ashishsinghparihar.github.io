import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Video } from '../../../../shared/models/video.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent implements OnInit {
  @Input() video!: Video;

  ngOnInit(): void {
    console.log(this.video);
  }
}
