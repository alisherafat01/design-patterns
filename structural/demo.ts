import { EmailClient } from './adapter/EmailClient';
import { GmailAdapter } from './adapter/GmailAdapter';

function demoAdapter() {
  var client = new EmailClient();
  client.addProvider(new GmailAdapter());
  client.downloadEmails();
}
