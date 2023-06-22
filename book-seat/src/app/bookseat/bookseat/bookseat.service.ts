import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookseatService {

  private URL = 'http://localhost:3000/bookseat';
  constructor(private _http: HttpClient) { }

  /**get customer details */
  getBookseat() {
    return this._http.get(this.URL);
  }
}
