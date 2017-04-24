import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.set('Page Not Found');
  }
}
