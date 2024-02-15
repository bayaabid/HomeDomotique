import { IRoutable, MqttInboundMessageRouter, MqttMessage } from '../../../common/src/lib';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemCommandMessageRouter } from './system-command-message.router';
import { SystemEventMessageRouter } from './system-event-message.router';
import { SystemMessageRouter } from './system-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { ChannelSegments } from '../../application.constants';

const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
const systemCommandMessageRouter: SystemCommandMessageRouter = SystemCommandMessageRouter.getInstance();
const systemEventMessageRouter: SystemEventMessageRouter = SystemEventMessageRouter.getInstance();
const systemMessageRouter: SystemMessageRouter = SystemMessageRouter.getInstance();
const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();

export const configureMessageRouters = (): IRoutable => {
  mqttInboundMessageRouter
    .getChannel(ChannelSegments.INBOUND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel(ChannelSegments.SYSTEM)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel(ChannelSegments.NODE)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel(ChannelSegments.COMMAND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemCommandMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel(ChannelSegments.EVENT)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemEventMessageRouter.routeMessage(message));

  return mqttInboundMessageRouter;
};
