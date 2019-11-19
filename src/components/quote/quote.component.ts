import { Component, OnInit } from '@angular/core';
import { BackendcallService } from 'src/services/backendcall.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuotedataComponent implements OnInit {

  public quote: any = {};

  constructor(private backendcall: BackendcallService) { }

  ngOnInit() {
  }

  quotePost() {
    this.quote.createdBy = "admin";
    this.backendcall.saveQuoteInfo(this.quote, 'quote').subscribe(data=>{
      console.log("Quote post successfully",data);
    },(err)=>{
      console.log("Error in post quote",err);
    })
  }
}
