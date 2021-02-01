import {Test} from './test.model';
import {Treatment} from './treatment.model';

export interface TreatmentChild {
  id: number;
  treatment: Treatment;
  test: Test;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}
