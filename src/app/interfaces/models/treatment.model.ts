import {TreatmentChildSession} from './TreatmentChildSession.model';
import {TreatmentChild} from './treatmentChild.model';

export interface Treatment {
  id: number;
  range: number;
  text;
  sessions?: number;
  treatmentChildren: TreatmentChild[];
  treatmentChildSessions: TreatmentChildSession[];
}
