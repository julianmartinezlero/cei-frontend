import {Child} from './child.model';
import {Professional} from './professional.model';
import {TreatmentChild} from './treatmentChild.model';

export interface Test {
  id: number;
  code: string;
  questionState: boolean;
  childId: number;
  totalValue?: number;
  child?: Child;
  treatmentChildren?: TreatmentChild[];
  professional?: Professional;
  professionalId?: number;
  tutorId?: number;
  createdAt?: any;
  updatedAt?: any;
}
