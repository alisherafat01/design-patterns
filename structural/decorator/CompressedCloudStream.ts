import { Stream } from './Stream';

export class CompressedCloudStream implements Stream {
  private stream!: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  public write(data: string) {
    let compressed = this.compress(data);
    this.stream.write(compressed);
  }

  private compress(data: string): string {
    return data.substring(0, 5);
  }
}
