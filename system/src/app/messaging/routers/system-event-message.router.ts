import { SegmentMatchMessageRouter, MessageRoute } from '../../../common/src/lib';
import { ChannelSegments } from '../../application.constants';

export class SystemEventMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemEventMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.STATUS, ChannelSegments.STATUS)]);
  }

  public static getInstance(): SystemEventMessageRouter {
    if (!SystemEventMessageRouter.instance) {
      SystemEventMessageRouter.instance = new SystemEventMessageRouter();
    }

    return SystemEventMessageRouter.instance;
  }
}
