import { Injectable } from '@angular/core';
import { Router, CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

import { CommonService } from '../common.service';
import { NetworkService } from '../network.service';
import { UserAuthenticationService } from '../user-authentication.service';

@Injectable()
export class PublicViewOnlyGuard implements CanActivate {
  constructor(
      private _commonService: CommonService,
      private _networkService: NetworkService,
      private _router: Router,
      private _userAuthService: UserAuthenticationService
      ) {

  }

  canActivate() {
    let letThrough = true; // by default, let the user visit the public pages
    letThrough = !this._userAuthService.isUserAuthenticated();
    if(!letThrough){
        console.log("Guarding: Authenticated user trying to access public pages. Redirecting to dashboard/channels.");
        this._router.navigateByUrl('/login');
    }
    return letThrough;
  };

}