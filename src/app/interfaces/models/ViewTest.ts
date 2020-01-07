import {Test} from './test.model';

export interface ViewTest extends Test {
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
