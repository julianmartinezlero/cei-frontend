import { Injectable } from '@angular/core';
import {PrincipalService} from '../../../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class TreatmentSessionService extends PrincipalService {
  route = 'treatment-session';
  updateSession(sessionId: number) {
    return this.get(`${sessionId}/update`);
  }
}
