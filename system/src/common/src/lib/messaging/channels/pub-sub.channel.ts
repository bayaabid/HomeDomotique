import { Observable, Subject } from 'rxjs';
import { IPubSubChannel } from '../interfaces/pub-sub-channel.interface';
import { MqttMessage } from '../models/mqtt-message.model';

export class PubSubChannel implements IPubSubChannel {
  private _source: Subject<MqttMessage>;
  constructor() {
    this._source = new Subject<MqttMessage>();
  }
  sendMessage(message: MqttMessage): void {
    this._source.next(message);
  }
  receivedMessage(): Observable<MqttMessage> {
    return this._source.asObservable();
  }
}
