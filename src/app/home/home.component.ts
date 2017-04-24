import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ 'home.component.scss' ]
})
export class HomeComponent implements OnInit, OnDestroy {
  public article: Article;
  private articleSubscription: Subscription;
  public textHeading: boolean = true;

  constructor(private articles: ArticlesService, private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.set('Welcome');

    this.articleSubscription = this.articles.sortedObservable.subscribe(() => {
      this.article = this.articles.getLatestArticle();

      if (!this.article.hasContent()) {
        this.articles.fetchIndividualContent(this.article.slug);
      }
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
