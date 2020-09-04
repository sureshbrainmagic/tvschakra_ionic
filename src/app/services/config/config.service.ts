import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // public rootUrl = 'http://localhost:3000/api/v1/';
  private rootUrl = 'http://localhost:3000/';
  constructor(
    private http: HttpClient
  ) { }

  getData(url): Observable<any> {
    const geturl = `${this.rootUrl}${url}`;
    return this.http.get(geturl);
  }

  postData(url, bodyValues) {
    const apiURL = `${this.rootUrl}${url}`;
    return this.http.post(apiURL, bodyValues);
  }

}
