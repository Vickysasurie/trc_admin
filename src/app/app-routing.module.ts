import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotedataComponent } from 'src/components/quote/quote.component';
import { EventComponent } from 'src/components/event/event.component';
import { VideosComponent } from 'src/components/videos/videos.component';

const routes: Routes = [
  {
      path: '',
      component: QuotedataComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'video',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
