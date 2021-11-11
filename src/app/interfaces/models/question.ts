export interface Question {
  id?: null;
  question: null;
  questionType: null;
  details: null;
  questionOptions?: QuestionOption[];
  questionAssets?: QuestionOptionAsset[];
  resourceUrl?: string;
}

export interface QuestionOption {
  id?: null;
  value: null;
  description: null;
  questionId: null;
}

export interface QuestionOptionAsset {
  id: null;
  assetType: null;
  asset: null;
  questionId: null;
}
