import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NetworkService } from '../common/network.service';
import { CommonService } from '../common/common.service';
import { AppApiUrls, AppApiStatusCode } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private subject = new Subject<any>();
  data: any;
  fuseConfig: any;

  constructor(
    private _networkService: NetworkService,
    private commonService: CommonService,
    ) {
    let obj;
    if (this.commonService.userInfo()) {
      obj = JSON.parse(this.commonService.userInfo().colorTheme);
    }

    
    console.log('toolbar: ', this.fuseConfig.layout.titlebar.background);
  }

  sendData(data) {
    console.log(JSON.stringify(data));
    this.subject.next({ data });
  }

  clearData() {
    this.subject.next();
  }

  emptyData() {
    this.subject.next();
  }

  onData(): Observable<any> {
    return this.subject.asObservable();
  }

}
