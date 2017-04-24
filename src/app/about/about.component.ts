import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.set('About');
  }
}
