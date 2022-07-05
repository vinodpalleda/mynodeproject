import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserAuthenticationService {

  constructor(
    /* DON'T consume NetworkService here. NetworkService should consumes this service for authentication purpose. If API calls are required, use _httpClient instead.*/
    private _commonService: CommonService,
    private _httpClient: HttpClient
    ) {}
    
    isUserAuthenticated() {
      // as backend is not providing any auth service to verify/refresh the token
      // we'll have to rely upon local storage only
      let authInfo = this._commonService.authInfo();
      let userInfo = this._commonService.userInfo();
      return !this._commonService.isNullOrUndefined(userInfo) && !this._commonService.isEmptyOrWhitespace(authInfo.username) && !this._commonService.isEmptyOrWhitespace(authInfo.token) && !this._commonService.isEmptyOrWhitespace(authInfo.userid) && authInfo.username == userInfo.username && authInfo.userid == userInfo.user_master_id;
    };
}
