import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerFileService {

  constructor(public http: Http) { }
  
  public httpGetPromise(url: string, path: string) {
    return this.http
      .get(url, path)
      .toPromise();
  }

}
