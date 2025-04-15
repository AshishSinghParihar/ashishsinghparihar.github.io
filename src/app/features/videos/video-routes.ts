import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../videos/components/videos-dashboard/videos-dashboard.component').then(
        (c) => c.VideosDashboardComponent,
      ),
  },
  {
    path: 'watch/:id',
    loadComponent: () =>
      import('../videos/components/video-player/video-player.component').then(
        (c) => c.VideoPlayerComponent,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
