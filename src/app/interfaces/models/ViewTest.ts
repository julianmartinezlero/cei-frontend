import {TestChild} from './testChild.model';

export interface ViewTest extends TestChild {
  id: number;
  code: string;
  questionState: boolean;
  childId: number;
  professionalId?: number;
  tutorId?: number;
  createdAt?: any;
  updatedAt?: any;

  name?: any;
  tutor?: any;
}
