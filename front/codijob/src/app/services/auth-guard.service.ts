import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _auth: AuthenticationService, private _router: Router) {}

  canActivate(){
    if (!this._auth.isLoggedIn()) {
      this._router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
