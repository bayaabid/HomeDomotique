import { SegmentMatchMessageRouter, MessageRoute } from '../../../common/src/lib';
import { ChannelSegments } from '../../application.constants';

export class SystemMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.COMMAND, ChannelSegments.COMMAND), new MessageRoute('event', 'event')]);
  }

  public static getInstance(): SystemMessageRouter {
    if (!SystemMessageRouter.instance) {
      SystemMessageRouter.instance = new SystemMessageRouter();
    }

    return SystemMessageRouter.instance;
  }
}
