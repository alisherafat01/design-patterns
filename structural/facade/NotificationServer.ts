import { AuthToken } from './AuthToken';
import { Connection } from './Connection';
import { Message } from './Message';

export class NotificationServer {
  // connect() -> Connection
  // authenticate(appID, key) -> AuthToken
  // send(authToken, message, target)
  // conn.disconnect()

  public connect(ipAddress: string): Connection {
    return new Connection();
  }

  public authenticate(appID: string, key: string): AuthToken {
    return new AuthToken();
  }

  public send(authToken: AuthToken, message: Message, target: string) {
    console.log('Sending a message');
  }
}
