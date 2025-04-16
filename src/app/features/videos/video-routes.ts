import { Routes } from '@angular/router';

/**
 * Defines the routes for the video feature module.
 *
 * This configuration includes routes for the dashboard and video player components,
 * as well as a default redirect to the dashboard.
 */
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../videos/components/videos-dashboard/videos-dashboard.component').then(
        (c) => c.VideosDashboardComponent,
      ),
    /**
     * Route for the videos dashboard.
     * Loads the VideosDashboardComponent dynamically.
     */
  },
  {
    path: 'watch/:id',
    loadComponent: () =>
      import('../videos/components/video-player/video-player.component').then(
        (c) => c.VideoPlayerComponent,
      ),
    /**
     * Route for watching a specific video.
     * Loads the VideoPlayerComponent dynamically based on the video ID.
     */
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
    /**
     * Default route that redirects to the dashboard.
     */
  },
];
