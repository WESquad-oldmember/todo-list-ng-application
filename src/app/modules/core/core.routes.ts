import { mainRoutesNames } from './../main/main-routes.names';
import { Routes } from '@angular/router';
import { coreRoutesNames } from './core-routes.names';

export const coreRoutes: Routes = [
  {
    path: coreRoutesNames.MAIN,
    loadChildren: () => import('../main/main.module')
      .then(m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: coreRoutesNames.MAIN + '/' + mainRoutesNames.HOME,
    pathMatch: 'full'
  }
];
