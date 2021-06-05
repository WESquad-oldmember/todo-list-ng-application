import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { mainRoutesNames } from './main-routes.names';

export const mainRoutes: Routes = [
  {
    path: '',
    children: [
      { path: mainRoutesNames.ABOUT, component: AboutComponent },
      { path: mainRoutesNames.HOME, component: HomeComponent }
    ]
  }
];
