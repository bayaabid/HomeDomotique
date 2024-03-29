/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';
import { ContextValue } from '../models/context-value.model';

export class ApplicationContext {
  private static instance: ApplicationContext;
  private _context: { [key: string]: ContextValue };
  private constructor() {
    this._context = {};
  }
  public static getInstance(): ApplicationContext {
    if (!ApplicationContext.instance) {
      ApplicationContext.instance = new ApplicationContext();
    }
    return ApplicationContext.instance;
  }
  public setItem(key: string, value: any): void {
    if (!Object.prototype.hasOwnProperty.call(this._context, key)) {
      this._context[key] = new ContextValue(value);
    } else {
      this._context[key].setValue;
    }
  }
  public getItem(key: string): Observable<any> {
    if (!Object.prototype.hasOwnProperty.call(this._context, key)) {
      this._context[key] = new ContextValue(null);
    }
    return this._context[key].getValue();
  }
}
