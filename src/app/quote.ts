export class Quote {
  private quote: string;
  private by: string;

  constructor(quote: string, by: string) {
    this.quote = quote;
    this.by = by;
  }

  getQuote() {
    return this.quote;
  }

  getBy() {
    return this.by;
  }
}
