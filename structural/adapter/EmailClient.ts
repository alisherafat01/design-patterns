import { EmailProvider } from './EmailProvider';

export class EmailClient {
  private providers: EmailProvider[] = [];

  public addProvider(provider: EmailProvider) {
    this.providers.push(provider);
  }

  public downloadEmails() {
    for (var provider of this.providers) provider.downloadEmails();
  }
}
