import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../common.service';


@Injectable()
export class DashboardService extends CommonService {
  public getCustomers(): Observable<any> {
    return this.hc.get(this.apiURL.bars);
  }
  public getLines(): Observable<any> {
    return this.hc.get(this.apiURL.lines);
  }
}
