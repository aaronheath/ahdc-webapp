import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics as Analytics } from 'angulartics2';
import { ArticlesService } from './articles.service';
import { PageTitleService } from './page-title.service';
import { FailedFetchingDataComponent } from './failed-fetching-data/failed-fetching-data.component';
import { environment } from '../environments/environment';

declare var ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ ArticlesService, PageTitleService ],
})
export class AppComponent implements OnInit {
  componentData = null;

  constructor(
    private Analytics: Analytics,
    private articles: ArticlesService
  ) {
    ga('create', environment.googleAnalyticsTrackingId, 'auto');
  }

  ngOnInit() {
    this.articles.fetchArticles();

    this.createHelloWorldComponent();
  }

  createHelloWorldComponent() {
    this.componentData = {
      component: FailedFetchingDataComponent,
      inputs: {
        showNum: 9
      }
    };
  }
}
