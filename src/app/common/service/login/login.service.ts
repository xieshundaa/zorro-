import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../common.service';


@Injectable()
export class LoginService extends CommonService {
  public getCustomers(): Observable<any> {
    return this.hc.get(this.apiURL.login);
  }
}
