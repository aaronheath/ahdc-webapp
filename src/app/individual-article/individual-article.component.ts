import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { Subscription } from 'rxjs';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-individual-article',
  templateUrl: './individual-article.component.html',
  styleUrls: [ './individual-article.component.css' ]
})
export class IndividualArticleComponent implements OnInit, OnDestroy {
  public article: Article;
  private slug: string;
  private routeSubscription: Subscription;
  private articlesSubscription: Subscription;

  constructor(private route: ActivatedRoute, private articles: ArticlesService, private pageTitleService: PageTitleService) {
    this.routeSubscription = route.params.subscribe(params => {
      this.slug = params[ 'slug' ];

      this.setArticle();
    });
  }

  ngOnInit() {
    this.articlesSubscription = this.articles.sortedObservable.subscribe((data) => this.setArticle());
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();

    this.articlesSubscription.unsubscribe();
  }

  setArticle(): void {
    if (!this.slug) {
      return;
    }

    this.article = this.articles.getBySlug(this.slug);

    if (!this.article) {
      return;
    }

    if (!this.article.hasContent()) {
      this.articles.fetchIndividualContent(this.article.slug);
    }

    this.pageTitleService.set(this.article.title);
  }
}
