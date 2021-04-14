import {TreatmentChildSession} from './TreatmentChildSession.model';
import {TreatmentChild} from './treatmentChild.model';
import {TreatmentAsset} from './treatmentAsset';

export interface Treatment {
  id: number;
  range: number;
  text;
  sessions?: number;
  treatmentChildren: TreatmentChild[];
  treatmentAssets: TreatmentAsset[];
  treatmentChildSessions: TreatmentChildSession[];
}
