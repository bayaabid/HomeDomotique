import { MessageRoute } from '../models/message-route.model';
import { MqttMessage } from '../models/mqtt-message.model';
import { AbstractMessageRouter } from './abstract-message.router';

export abstract class SegmentMatchMessageRouter extends AbstractMessageRouter {
  constructor(routes: MessageRoute[]) {
    super(routes);
  }
  public routeMessage(message: MqttMessage): void {
    const keys: string[] = this._channels ? Object.keys(this._channels) : [];
    const [segment] = message.topic.split('/');
    if (keys.includes(segment)) {
      const routedTopic: string = message.topic.split('/').slice(1).join('/');
      const outboundMessage: MqttMessage = new MqttMessage(routedTopic, message.message);
      this._channels[segment].sendMessage(outboundMessage);
    }
  }
}
