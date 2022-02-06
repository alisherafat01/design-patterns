import { EmailClient } from "./adapter/EmailClient";
import { GmailAdapter } from "./adapter/GmailAdapter";

var client = new EmailClient();
client.addProvider(new GmailAdapter());
client.downloadEmails();
