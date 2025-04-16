import { Component, HostListener, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    VideoCardComponent,
  ],
  templateUrl: './videos-dashboard.component.html',
  styleUrl: './videos-dashboard.component.scss',
})
export class VideosDashboardComponent implements OnInit {
  /**
   * Indicates whether videos are currently being fetched.
   */
  private fetchingVideos: boolean = false;
  /**
   * The search query entered by the user.
   */
  public searchQuery: string = '';
  /**
   * The list of videos filtered based on the search query.
   */
  public filteredVideos: Video[] = [];

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
      if (isVisible && !this.fetchingVideos) {
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
    private snackBar: MatSnackBar,
    private readonly videoHttpService: VideoHttpService,
    public videoService: VideoService,
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes video loading and performs an initial search.
   */
  ngOnInit(): void {
    this.searchQuery = this.videoService.searchQuery();
    if (this.videoService.videos().length === 0) {
      this.loadVideos();
    } else {
      this.onSearch();
    }
  }

  /**
   * Loads videos from the server and updates the video list.
   * Displays an error message if the video fetching fails.
   */
  private loadVideos() {
    if (this.fetchingVideos) return;
    this.fetchingVideos = true;

    this.videoHttpService.fetchVideos().subscribe({
      next: (videos: Video[]) => {
        this.videoService.videos.update((currentVideos) => [...currentVideos, ...videos]);
        this.fetchingVideos = false;

        this.onSearch();
      },
      error: (error: any) => {
        console.log(error);
        this.fetchingVideos = false;
        this.snackBar.open(error?.error?.error?.message ?? 'Something went wrong!', 'Okay');
      },
    });
  }

  /**
   * Filters the list of videos based on the search query.
   * Updates the filteredVideos array with the results.
   */
  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.videoService.searchQuery.set(query);

    if (!query) {
      this.filteredVideos = this.videoService.videos();
      return;
    }
    this.filteredVideos = this.videoService
      .videos()
      .filter(
        (video) =>
          video.title.toLowerCase().includes(query) ||
          video.description?.toLowerCase().includes(query),
      );
  }

  /**
   * Refreshes the video list by resetting the page token and loading new videos.
   */
  onRefresh(): void {
    this.videoService.nextPageToken = '';
    this.loadVideos();
  }
}
