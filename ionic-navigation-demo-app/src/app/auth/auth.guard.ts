import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

//what are route guards?
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router:Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.userIsAuthenticated){
        this.router.navigateByUrl('/auth');
      }
    return this.authService.userIsAuthenticated;
  }
  
}