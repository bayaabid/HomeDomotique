/* eslint-disable @typescript-eslint/no-explicit-any */
export class MqttMessage {
  constructor(
    public topic: string,
    public message: any
  ) {}
}
