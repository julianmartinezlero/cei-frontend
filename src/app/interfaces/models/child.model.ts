import {Tutor} from './tutor.model';

export interface Child {
  id?: number;
  name: string;
  lastName: string;
  birthDate: string;
  sex: string;
  ci?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tutor?: Tutor;
  photo?: string;
}
