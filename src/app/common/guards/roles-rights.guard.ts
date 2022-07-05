import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class RolesRightsGuard implements CanActivate {
  constructor(
    private commonService: CommonService,
    private _router: Router
  ) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let letThrough = false;
    const data = next.data.data as Array<string>;
    if (data != null && data.length > 0) {
      letThrough = this.commonService.verifyUserRightGuard(data);
    }
    else {
      letThrough = false;
    }

    if (!letThrough) {
      console.log('Guarding: Unauthenticated Access Detected. Redirecting to 404.');
      this._router.navigateByUrl('/errors/error-404');
    }
    return letThrough;
  }

}
