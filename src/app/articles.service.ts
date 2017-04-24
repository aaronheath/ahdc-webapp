import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import * as is_before from 'date-fns/is_before';
import { ApiParser } from './api-parser';
import { Article } from './article';
import { ArticlesByTag } from './articles-by-tag';
import { Modal } from './modal';
import { environment } from '../environments/environment';

@Injectable()
export class ArticlesService {
  public sortedObservable: ReplaySubject<Article[] | {}> = new ReplaySubject(1);
  public byTagObservable: ReplaySubject<Article[] | {}> = new ReplaySubject(1);
  public fetchArticlesFailure: ReplaySubject<Modal> = new ReplaySubject(1);
  private data: Article[] = [];
  private byTag: ArticlesByTag = {};

  constructor(private http: Http, private apiParser: ApiParser) {
    this.setupSortAndStoreByTag();
  }

  fetchArticles(): void {
    this.apiParser
      .handle(this.http.request(this.apiPath('/blog/posts')))
      .subscribe((res) => {
        const articles = res.map((article: Article) => Article.fromObject(article));

        this.data = this.sortByPublished(articles);
        this.sortedObservable.next(this.data);
      }, () => {
        this.handleHttpError(
          this.fetchArticlesFailure,
          'An failure has occurred while attempting to fetch articles information.'
        );
      });
  }

  fetchIndividualContent(slug: string): void {
    this.apiParser
      .handle(this.http.request(this.apiPath(`/blog/posts/${slug}`)))
      .subscribe((res: string) => {
        this.data = this.data.map((article: Article) => {
          if (article.slug !== slug) {
            return article;
          }

          article.content = res;

          return article;
        });

        this.sortedObservable.next(this.data);
      }, () => {
        this.handleHttpError(
          this.fetchArticlesFailure,
          'An failure has occurred while attempting to fetch individual article content..'
        );
      });
  }

  private apiPath(path: string): string {
    return `${environment.ahdcApiPath}${path}`;
  }

  private handleHttpError(subject: ReplaySubject<Modal>, msg: string): void {
    console.error(msg);

    subject.next({ body: msg });

    throw new Error(msg);
  }

  private setupSortAndStoreByTag(): void {
    this.sortedObservable.subscribe((res: Article[]) => {
      if (!res) {
        return;
      }

      this.byTag = {};

      res.forEach((article) => {
        article.tags.forEach((tag) => {
          if (!this.byTag[ tag ]) {
            this.byTag[ tag ] = [];
          }

          this.byTag[ tag ].push(article);
        });
      });

      this.byTagObservable.next(this.byTag);
    });
  }

  private sortByPublished(articles): Article[] {
    return articles.sort((a, b) => is_before(a.published, b.published) ? 1 : -1);
  }

  getBySlug(slug: string): Article | null {
    return this.data.find(article => article.hasSlug(slug));
  }

  getByTag(tag: string): Article[] {
    if (!this.byTag[ tag ]) {
      return [];
    }

    return this.byTag[ tag ];
  }

  getLatestArticle(): Article {
    return this.data[ 0 ];
  }
}
