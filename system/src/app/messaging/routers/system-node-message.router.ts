import { SegmentMatchMessageRouter, MessageRoute } from '../../../common/src/lib';
import { ChannelSegments } from '../../application.constants';

export class SystemNodeMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemNodeMessageRouter;

  private constructor() {
    super([
      new MessageRoute(ChannelSegments.COMMAND, ChannelSegments.COMMAND),
      new MessageRoute(ChannelSegments.COMPONENT, ChannelSegments.COMPONENT),
      new MessageRoute(ChannelSegments.EVENT, ChannelSegments.EVENT),
      new MessageRoute(ChannelSegments.REGISTER, ChannelSegments.REGISTER),
      new MessageRoute(ChannelSegments.STATUS, ChannelSegments.STATUS)
    ]);
  }

  public static getInstance(): SystemNodeMessageRouter {
    if (!SystemNodeMessageRouter.instance) {
      SystemNodeMessageRouter.instance = new SystemNodeMessageRouter();
    }

    return SystemNodeMessageRouter.instance;
  }
}
