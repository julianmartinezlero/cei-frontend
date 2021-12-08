export interface Question {
  id?: number;
  question: any;
  questionType: any;
  details: any;
  questionOptions?: QuestionOption[];
  questionAssets?: QuestionOptionAsset[];
  resourceUrl?: string;
  [key: string]: any;
}

export interface QuestionOption {
  id?: number;
  value: number;
  description: string;
  questionId?: number;
}

export interface QuestionOptionAsset {
  id: null;
  assetType: null;
  asset: null;
  questionId: null;
}
