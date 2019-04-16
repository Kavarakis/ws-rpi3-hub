import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // static $inject = ['$window','jwtHelper'];
  // private jwtIndex: string = 'jwt';
  constructor() {
  }

  public getToken(): string {
    return 'success';
  }

  // public tokenPayload():any {
  //     return (this.jwtService.decodeToken(this.$window.localStorage[this.jwtIndex]) || null);
  // }

  // public getToken(): string {
  //     return (this.$window.localStorage[this.jwtIndex]);
  // }

  // public getHeaders(): any {
  //     return {
  //         Authorization: ('Bearer ' + this.$window.localStorage[this.jwtIndex])
  //     };
  // }

  // public setToken(token): void {
  //     this.$window.localStorage[this.jwtIndex] = token;
  // }
}
