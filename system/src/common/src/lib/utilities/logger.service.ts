import { LogType } from './log-type.enum';

export class Logger {
  constructor(public _class: string) {}
  public debug(message: string): void {
    this._log(LogType.DEBUG, message);
  }
  public warn(message: string): void {
    this._log(LogType.WARN, message);
  }
  public error(message: string): void {
    this._log(LogType.ERROR, message);
  }
  public trace(message: string): void {
    this._log(LogType.TRACE, message);
  }
  private _log(type: LogType, message: string): void {
    const timestamp: Date = new Date();
    console.log(`[${type}][${timestamp.toISOString()}][${this._class}] ${message}`);
  }
}
