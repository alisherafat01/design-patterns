import { EmailProvider } from './EmailProvider';
import { GmailClient } from './Gmail/GmailClient';

export class GmailAdapter implements EmailProvider {
  private client = new GmailClient();

  public downloadEmails() {
    this.client.connect();
    this.client.getEmails();
    this.client.disconnect();
  }
}
