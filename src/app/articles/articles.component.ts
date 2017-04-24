import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Subscription } from 'rxjs';
import { Article } from '../article';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.css' ]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  private articlesSubscription: Subscription;

  constructor(private articlesService: ArticlesService, private pageTitleService: PageTitleService) {
    console.log('h1')
  }

  ngOnInit() {
    console.log('h2')

    this.pageTitleService.set('Articles');

    this.articlesSubscription = this.articlesService.sortedObservable.subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }
}
