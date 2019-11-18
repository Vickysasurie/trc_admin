import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule} from '@angular/material';

import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import { QuotedataComponent } from 'src/components/quote/quote.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from 'src/components/event/event.component';
import { VideosComponent } from 'src/components/videos/videos.component';
import { SigninComponent } from 'src/components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuotedataComponent,
    EventComponent,
    VideosComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
