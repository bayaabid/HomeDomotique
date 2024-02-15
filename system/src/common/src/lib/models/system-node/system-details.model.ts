import { CpuInfo } from 'os';

export class SystemDetails {
  constructor(
    public arch: string,
    public type: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public platform: any,
    public release: string,
    public hostname: string,
    public uptime: number,
    public cpus: CpuInfo[],
    public loadavg: number[],
    public freemem: number,
    public totalmem: number
  ) {}
}
