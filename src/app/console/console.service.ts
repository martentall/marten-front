import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsoleService {

  // Todo configurable
  apiRoot: string = 'http://localhost';

  constructor(private http:HttpClient) {}

  getWelcome() {
    return this.http.get('/welcome');
  }

}
