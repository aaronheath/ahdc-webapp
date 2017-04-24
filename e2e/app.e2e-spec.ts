import { NgPublicPage } from './app.po';

describe('ng-public App', function() {
  let page: NgPublicPage;

  beforeEach(() => {
    page = new NgPublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
