import { Message } from './Message';
import { NotificationServer } from './NotificationServer';

export class NotificationService {
  public send(message: string, target: string): void {
    let server = new NotificationServer();
    let connection = server.connect('ip');
    let authToken = server.authenticate('appID', 'key');
    server.send(authToken, new Message(message), target);
    connection.disconnect();
  }
}
