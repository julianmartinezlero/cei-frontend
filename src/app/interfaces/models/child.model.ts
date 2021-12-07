import {Professional} from './professional.model';
import {TestChild} from './testChild.model';

export interface Child {
  id?: number;
  name: string;
  lastName: string;
  birthDate: string;
  sex: string;
  ci?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tutor?: Professional;
  professional?: Professional;
  photo?: string;
  tests?: TestChild[];
  isActive?: boolean;
  education?: string;
}

export interface GroupChildren {
  children: Child[];
  title: string;
}
