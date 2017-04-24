import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../articles.service';
import { Modal } from '../modal';

@Component({
  selector: 'app-failed-fetching-data',
  templateUrl: './failed-fetching-data.component.html',
  styleUrls: [ './failed-fetching-data.component.css' ]
})
export class FailedFetchingDataComponent implements OnInit, OnDestroy {
  @Output() onClose = new EventEmitter<void>();

  public show: boolean = false;
  private title: string = 'Unable to fetch data!';
  private fetchArticlesFailure: Modal;
  private fetchArticleSubscription: Subscription;

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.fetchArticleSubscription = this.articlesService.fetchArticlesFailure.subscribe((data: Modal) => {
      this.fetchArticlesFailure = data;

      this.show = true;
    });
  }

  ngOnDestroy() {
    this.fetchArticleSubscription.unsubscribe();
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.fetchArticlesFailure.body;
  }

  close() {
    this.show = false;

    this.onClose.emit();
  }

  refresh() {
    location.reload();
  }
}
