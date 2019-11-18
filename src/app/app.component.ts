import { Component, ChangeDetectorRef } from '@angular/core';
import { BackendcallService } from 'src/services/backendcall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TRCadmin';
  token: String;
  
  constructor(public backendservice: BackendcallService, private cdr: ChangeDetectorRef){
    
  }
  ngOnInit() {
    this.token = localStorage.getItem('token');
  }
  
}