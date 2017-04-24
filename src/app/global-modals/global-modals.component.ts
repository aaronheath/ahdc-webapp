import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../articles.service';
import { Modal } from '../modal';

@Component({
  selector: 'app-global-modals',
  templateUrl: './global-modals.component.html',
  styleUrls: [ './global-modals.component.css' ]
})
export class GlobalModalsComponent implements OnInit, OnDestroy {
  private fetchArticlesFailure: Modal;
  private show: boolean = true;
  private articlesSubscription: Subscription;

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.articlesSubscription = this.articlesService.fetchArticlesFailure.subscribe((data: Modal) => {
      this.fetchArticlesFailure = data;

      this.show = true;
    });
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }

  showFailedFetchingData() {
    if (!this.show) {
      return false;
    }

    if (!this.fetchArticlesFailure) {
      return false;
    }

    return !!Object.keys(this.fetchArticlesFailure).length;
  }

  onClose() {
    this.show = false;
  }
}
