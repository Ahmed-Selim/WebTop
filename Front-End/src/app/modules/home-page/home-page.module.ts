import { HomePageRoutingModule } from './homepage-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
