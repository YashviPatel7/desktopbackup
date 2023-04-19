import { Injectable } from '@angular/core';
import { customer } from './customer';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private URL = 'http://localhost:3000/customer';
  constructor(private _http: HttpClient) { }

  /**get customer details */
  getCustomerData() {
    return this._http.get(this.URL);
  }

  /**delete  */
  deleteCustomer(id: number) {
    return this._http.delete(`${this.URL}/${id}`);
  }
  /**post data */
  addCustomer(body: customer): Observable<customer> {
    return this._http.post<customer>(this.URL, body);
  }
  /**display one recode*/
  getCurrentData(id: number): Observable<customer> {
    return this._http.get<customer>(`${this.URL}/${id}`);
  }
  /**update data */
  updateData(id: number, data: customer) {
    return this._http.put(`${this.URL}/${id}`, data);
  }
}
