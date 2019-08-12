import {Injectable} from '@angular/core';
import {PrincipalService} from '../../../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService extends PrincipalService {
  route = 'child';
}
