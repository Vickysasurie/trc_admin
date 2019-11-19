import { Component, OnInit } from '@angular/core';
import { BackendcallService } from 'src/services/backendcall.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  public images:any ={};
  constructor(private backendcall: BackendcallService) { }

  ngOnInit() {
  }
  imagesPost(){
    this.images.createdBy = "admin";
    this.backendcall.saveImagesInfo(this.images, "image").subscribe(data=>{
      console.log("Images posted successfully: ",data);
    },(err)=>{
      console.log("Error in images upload: ",err);
    })
  }

}
