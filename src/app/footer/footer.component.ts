import { Component, OnInit } from '@angular/core';
import { QuotesService } from "../quotes.service";
import { Quote } from "../quote";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  quote: Quote;

  constructor(private quotes: QuotesService) {
    this.quote = this.quotes.getByRandom();
  }

  ngOnInit() {
  }

}
