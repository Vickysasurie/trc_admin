import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videotitle: string = null;
  public videourl: string = null;
  public thumbanailurl: string = null;
  public description: string = null;
  public videodate: string = null;
  public videotype: string = null;
  constructor() { }

  ngOnInit() {
  }
  videoPost() {
    console.log('Video title is:', this.videotitle + ' Video url is: ', this.videourl, ' thumbnail url: ', this.thumbanailurl + ' desc: ', this.description + ' videodate: ', this.videodate + ' video type: ', this.videotype);
  }
}
