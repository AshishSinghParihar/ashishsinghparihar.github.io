import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () => import('./features/videos/video-routes').then((r) => r.routes),
  },
  { path: '', pathMatch: 'full', redirectTo: 'videos' },
];
