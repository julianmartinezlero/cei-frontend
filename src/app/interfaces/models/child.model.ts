import {Professional} from './professional.model';

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
  tests?: any;
  isActive?: boolean;
  education?: string;
}

export interface GroupChildren {
  children: Child[];
  title: string;
}
