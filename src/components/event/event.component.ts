import { Component, OnInit } from '@angular/core';
import { BackendcallService } from '../../services/backendcall.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public eventname: string = null;
  public eventaddress: string = null;
  public event:any =  {};
  constructor( public backendcall: BackendcallService ) { }

  ngOnInit() {
    this.backendcall.getInfo('event').subscribe(data=>{
      console.log(data);
    },(err)=>{
      console.log(err);
    })
  }
 eventPost() {
   this.event.createdBy = "admin";
   this.backendcall.saveInfo(this.event,'event').subscribe(event=>{
     console.log(event);
   },(err)=>{
     console.log(err);
   })
  }


}
