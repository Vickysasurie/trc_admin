import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotedataComponent } from 'src/components/quote/quote.component';
import { EventComponent } from 'src/components/event/event.component';
import { VideosComponent } from 'src/components/videos/videos.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'video',
    component: VideosComponent
  },
  {
    path: 'quote',
    component: QuotedataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
