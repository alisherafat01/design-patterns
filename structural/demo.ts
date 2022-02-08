import { EmailClient } from './adapter/EmailClient';
import { GmailAdapter } from './adapter/GmailAdapter';
import { CloudStream } from './decorator/CloudStream';
import { CompressedCloudStream } from './decorator/CompressedCloudStream';
import { EncryptedCloudStream } from './decorator/EncryptedCloudStream';

function demoAdapter() {
  var client = new EmailClient();
  client.addProvider(new GmailAdapter());
  client.downloadEmails();
}

function demoDecorator() {
  const keyToStore = 'a secret value to be stored';
  new EncryptedCloudStream(new CompressedCloudStream(new CloudStream())).write(
    keyToStore
  );
}

demoDecorator();
