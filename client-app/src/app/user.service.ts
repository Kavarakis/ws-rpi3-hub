import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public getUser(): string {
  // Observable<IHttpResponse<any>>
    /*
    return this.http.get((this.window.localStorage[this.api] + 'user/' + this.authService.tokenPayload().id), {
        headers: this.authService.getHeaders()
      }).then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
      */
      return this.authService.getToken();
  }
  /*
  public update(user): Observable<IHttpResponse<any>> {
    return this.http.put((this.window.localStorage[this.api] + 'user/' + this.authService.tokenPayload().id), user, {
        headers: this.authService.getHeaders()
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  public create(user): Observable<IHttpResponse<any>> {

    return this.http.post((this.window.localStorage[this.api] + 'user/'), user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  */
}
export interface IHttpResponse<T> {
  status: any;
  data: T;
}
