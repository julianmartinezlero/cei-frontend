import {Child} from './child.model';
import {Professional} from './professional.model';
import {TreatmentChild} from './treatmentChild.model';
import {TreatmentChildSession} from './TreatmentChildSession.model';

export interface TestChild {
  id: number;
  code: string;
  questionState: boolean;
  childId: number;
  totalValue?: number;
  child?: Child;
  treatmentChildSessions?: TreatmentChildSession[];
  treatmentChildren: TreatmentChild[];
  professional?: Professional;
  professionalId?: number;
  tutorId?: number;
  createdAt?: any;
  updatedAt?: any;
}
