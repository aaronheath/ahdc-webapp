import * as Raven from 'raven-js';

import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { ApiParser } from './api-parser';
import { IndividualArticleComponent } from './individual-article/individual-article.component';
import { TagsComponent } from './tags/tags.component';
import { FailedFetchingDataComponent } from './failed-fetching-data/failed-fetching-data.component';
import { GlobalModalsComponent } from './global-modals/global-modals.component';
import { QuotesService } from './quotes.service';
import { FaComponent } from './fa/fa.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { StyleCodeDirective } from './style-code.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafeHtmlPipe } from './safeHtml';

/**
 * Sentry error handling and logging.
 */
Raven.config(environment.sentryUrl).install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError);
  }
}

/**
 * Routes
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/tag/:tag', component: TagsComponent },
  { path: 'article/:slug', component: IndividualArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArticleComponent,
    HomeComponent,
    ArticlesComponent,
    AboutComponent,
    IndividualArticleComponent,
    TagsComponent,
    FailedFetchingDataComponent,
    GlobalModalsComponent,
    FaComponent,
    NavHeaderComponent,
    PostsTableComponent,
    StyleCodeDirective,
    NotFoundComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
  ],
  providers: [
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    ApiParser,
    Title,
    QuotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
