import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  protected server = environment.server;
  protected route = '';

  constructor(protected http: HttpClient) {
  }

  get(id?) {
    return this.http.get(`${this.server}/${this.route}${id ? '/' + id : ''}`);
  }

  put(id, data) {
    return this.http.put(`${this.server}/${this.route}/${id}`, data);
  }

  post(data) {
    return this.http.post(`${this.server}/${this.route}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.server}/${this.route}/${id}`);
  }

  getCustom(param) {
    return this.http.get(`${this.server}/${this.route}/${param}`);
  }

  postCustom(param, data) {
    return this.http.post(`${this.server}/${this.route}/${param}`, data);
  }

  getQuery(route, query) {
    return this.http.get(`${this.server}/${this.route}/${route}`, {params: query});
  }

  postFile(param, data) {
    const h = new HttpHeaders();
    h.append('Content-Type', 'multipart/form-data');
    h.append('Accept', 'application/json');

    return this.http.post(`${this.server}/${this.route}/${param}`, data, {headers: h});
  }
}
