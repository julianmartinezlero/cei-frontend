import {Child} from './child.model';
import {Professional} from './professional.model';

export interface Test {
  id: number;
  code: string;
  questionState: boolean;
  childId: number;
  totalValue?: number;
  child?: Child;
  professional?: Professional;
  professionalId?: number;
  tutorId?: number;
  createdAt?: any;
  updatedAt?: any;
}
