import {TestChild} from './testChild.model';
import {Treatment} from './treatment.model';

export interface TreatmentChild {
  id: number;
  treatment: Treatment;
  test: TestChild;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}
