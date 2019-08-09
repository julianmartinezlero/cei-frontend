import {Injectable} from '@angular/core';
import {PrincipalService} from '../../../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class TutorService extends PrincipalService {
  route = 'tutor';
  // all() {
  //   return this.get();
  // }
  //
  // create(value: any, param?: any) {
  //   return this.post(value);
  // }
  //
  // delete(id: any) {
  //   return this.delete(id);
  // }
  //
  // show(id: any) {
  //   return this.get(id);
  // }
  //
  // update(id: any, value: any) {
  //   return this.put(id, value);
  // }
}
