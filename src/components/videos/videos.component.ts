import { Component, OnInit } from '@angular/core';
import { BackendcallService } from 'src/services/backendcall.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos: any = {};
  constructor(private backendcall: BackendcallService) { }

  ngOnInit() {
  }
  videoPost() {
    this.videos.createdBy = "admin";
    this.backendcall.saveVideoInfo(this.videos, 'video').subscribe(data=>{
      console.log("Videos post successfully",data);
    },(err)=>{
      console.log("Error in post video",err);
    })
  }
}
