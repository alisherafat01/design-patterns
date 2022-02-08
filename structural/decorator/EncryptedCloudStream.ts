import { Stream } from './Stream';

export class EncryptedCloudStream implements Stream {
  private stream!: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  public write(data: string) {
    var encrypted = this.encrypt(data);
    this.stream.write(encrypted);
  }

  private encrypt(data: string) {
    return '!@#$(!@#*()*)(*!@#';
  }
}
