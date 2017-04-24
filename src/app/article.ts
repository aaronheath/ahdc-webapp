import * as format from 'date-fns/format';

export class Article {
  public published: Date;
  public published_formatted: string;
  public content: string;

  public static fromObject(obj): Article {
    return new Article(obj.slug, obj.published, obj.title, obj.subtitle, obj.tags);
  }

  constructor(
    public slug: string,
    published: string,
    public title: string,
    public subtitle: string,
    public tags: string[] = []
  ) {
    this.published = new Date(published);
    this.published_formatted = format(this.published, 'D MMM YYYY');
  }

  setContent(content: string): void {
    this.content = content;
  }

  hasSlug(slug: string): boolean {
    return this.slug === slug;
  }

  hasSubtitle(): boolean {
    return !!this.subtitle;
  }

  hasContent(): boolean {
    return !!this.content;
  }
}
