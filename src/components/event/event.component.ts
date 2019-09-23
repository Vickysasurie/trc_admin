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
  public event = { eventname: '', eventaddress: ''};
  constructor(  ) { }

  ngOnInit() {
  }
 eventPost() {
    // console.log('Event name is:', this.eventname + ' Event address is: ', this.eventaddress);
    // this.apicall.saveAllDetails(this.event);
    console.log('Event name is:', this.event);
  }
}
