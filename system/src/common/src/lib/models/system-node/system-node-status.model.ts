import { StatusType } from './satuts-type.enum';

export class SystemNodeStatus {
  constructor(
    public state: StatusType,
    public timestamp: Date
  ) {}
}
