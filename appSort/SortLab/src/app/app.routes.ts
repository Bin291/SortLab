import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '2-process',
    loadChildren: () => import('./pages/two-process/two-process.routes').then(m => m.twoProcessRoutes),
  },
  {
    path: '1-process',
    loadChildren: () => import('./pages/one-process/one-process.routes').then(m => m.oneProcessRoutes),
  },
  {
    path: '6-process',
    loadChildren: () => import('./pages/six-process/six-process.routes').then(m => m.sixProcessRoutes),
  },
  {
    path: 'shell-sort',
    loadChildren: () => import('./pages/shell/shell.routes').then(m => m.shellRoutes),
  },
  {
    path: 'quick-sort',
    loadChildren: () => import('./pages/quick/quick.routes').then(m => m.quickRoutes),
  },
  {
    path: 'selection-sort',
    loadChildren: () => import('./pages/selection/selection.routes').then(m => m.selectionRoutes),
  },
  {
    path: 'radix-sort',
    loadChildren: () => import('./pages/radix/radix.routes').then(m => m.radixRoutes),
  },
  {
    path: 'insertion-sort',
    loadChildren: () => import('./pages/insertion/insertion.routes').then(m => m.insertionRoutes),
  },
  {
    path:'bubble-sort',
    loadChildren: () => import('./pages/bubble/bubble.routes').then(m => m.bubbleRoutes),
  }
];
