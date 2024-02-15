import { IMessageService, IPubSubChannel, MqttGateway, MqttMessage } from '../../../common/src/lib';

export class SystemNodeCommandMessageService implements IMessageService {
  private _mqttGateway: MqttGateway;

  constructor(channel: IPubSubChannel) {
    this._mqttGateway = MqttGateway.getInstance();
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    const routedTopic = `node/${message.message.node.id}/node/command/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    this._mqttGateway.outbound(outbound);
  }
}
