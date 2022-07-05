import { Injectable } from '@angular/core';
import {
  Router, CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { CommonService } from '../common.service';
import { NetworkService } from '../network.service';

import { UserAuthenticationService } from '../user-authentication.service';

@Injectable()
export class AdminUserGuard implements CanActivate {
  constructor(
    private _commonService: CommonService,
    private _networkService: NetworkService,
    private _router: Router,
    private _userAuthService: UserAuthenticationService
  ) {

  }

  canActivate() {
    let letThrough = false; // by default, stop the navigation
    // console.log(this._router.getCurrentNavigation());
    // letThrough = this._commonService.userInfo()["account_type"] == "0" || this._commonService.userInfo()["account_type"] == "1";
    letThrough = this._commonService.userInfo()["account_type"] == "1" || this._commonService.userInfo()["account_type"] == "2" || this._commonService.userInfo()["account_type"] == "3";
    // letThrough = true;
    if (!letThrough) {
      console.log("Guarding: Unauthenticated Access Detected. Redirecting to 404.");
      this._router.navigateByUrl('/errors/error-404');
    }
    return letThrough;
  };

}