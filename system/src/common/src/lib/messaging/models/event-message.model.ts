/* eslint-disable @typescript-eslint/no-explicit-any */
export class EventMessage {
  constructor(
    public event: string,
    public payload: any
  ) {}
}
