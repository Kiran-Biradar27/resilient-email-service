export class RateLimiter {
  private requests: number[] = [];

  constructor(private limit: number, private interval: number) {}

  public allow(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter(t => now - t < this.interval);
    if (this.requests.length < this.limit) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
}
