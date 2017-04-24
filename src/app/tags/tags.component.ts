import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: [ './tags.component.css' ]
})
export class TagsComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  tag: string;
  private byTagSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService, private pageTitleService: PageTitleService) {
    this.routeSubscription = route.params.subscribe(params => {
      this.tag = params[ 'tag' ];

      this.setArticles();
    });
  }

  ngOnInit() {
    this.pageTitleService.set(`Articles with tag '${this.tag}'`);

    this.byTagSubscription = this.articlesService.byTagObservable.subscribe(() => {
      this.setArticles();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();

    this.byTagSubscription.unsubscribe();
  }

  setArticles() {
    this.articles = this.articlesService.getByTag(this.tag);
  }
}
