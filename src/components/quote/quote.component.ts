import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuotedataComponent implements OnInit {

  public quote: string = null;
  public quoteimageurl: string = null;
  constructor() { }

  ngOnInit() {
  }

  quotePost() {
    console.log('Quote is:', this.quote + ' Quote image url: ', this.quoteimageurl);
  }
}
