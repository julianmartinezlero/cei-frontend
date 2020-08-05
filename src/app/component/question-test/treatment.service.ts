import {Injectable} from '@angular/core';
import {PrincipalService} from '../../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService extends PrincipalService {
  route = 'treatment';
}
