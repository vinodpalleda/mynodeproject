import { Injectable } from '@angular/core';
import { Router, CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

import { CommonService } from '../common.service';
import { NetworkService } from '../network.service';
import { UserAuthenticationService } from '../user-authentication.service';

@Injectable()
export class LoggedInUserOnlyGuard implements CanActivate {
  constructor(
      private _commonService: CommonService,
      private _networkService: NetworkService,
      private _router: Router,
      private _userAuthService: UserAuthenticationService
      ) {

  }

  canActivate() {
    let letThrough = false; // by default, stop the navigation
    letThrough = this._userAuthService.isUserAuthenticated();
    if(!letThrough){
        console.log("Guarding: Unauthenticated Access Detected. Redirecting to Login.");
        localStorage.clear();
        sessionStorage.clear();
        this._router.navigateByUrl('/login');
        // this._commonService.showErrorAlertMessage("Unauthenticated Access. Please login.").afterDismissed().subscribe(res => {
        //     this._router.navigateByUrl('/login');
        // });
    }
    return letThrough;
  };

}