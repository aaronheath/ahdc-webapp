import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Injectable()
export class PageTitleService {
  constructor(private titleService: Title) { }

  set(prepend: string): void {
    this.titleService.setTitle(`${prepend}${environment.appendToTitle}`);
  }
}
