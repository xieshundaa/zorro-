import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommonService {
  protected apiURL: any = {};
  constructor(protected hc: HttpClient) {
    this.apiURL = environment.apiURL;
    // this.apiURL = 'http://localhost:4200/assets/loggin.json';
    // this.apiURL = (<any>window).environment.apiURL;
  }
}
