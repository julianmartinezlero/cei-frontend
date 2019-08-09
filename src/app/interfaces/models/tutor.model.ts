import {Child} from './child.model';

export interface Tutor {
  id?: number;
  name: string;
  lastName: string;
  ci: string;
  cell: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  children?: Child[];
}
