import { Stream } from './Stream';

export class CloudStream implements Stream {
  public write(data: string) {
    console.log('Storing ' + data);
  }
}
