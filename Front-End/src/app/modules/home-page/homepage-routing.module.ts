import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }

  /**
   *  if You want to display more pages like: features, team, ... ;
   */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
