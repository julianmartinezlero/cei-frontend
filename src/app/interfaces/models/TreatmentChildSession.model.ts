import {Treatment} from './treatment.model';
import {TestChild} from './testChild.model';

export interface TreatmentChildSession {
  id: number;
  treatment: Treatment;
  test: TestChild;
  state: boolean;
  dateIni: string;
  dateEnd: string;
}
