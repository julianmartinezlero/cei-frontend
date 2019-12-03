export interface Test {
  id: number;
  code: string;
  questionState: boolean;
  childId: number;
  professionalId?: number;
  tutorId?: number;
  createdAt?: any;
  updatedAt?: any;
}
