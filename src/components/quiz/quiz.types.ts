export interface QuizFormValues {
  [key: string]: string;
}

export interface QuizData {
  id: string;
  title: string;
  imgUrl: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

export interface QuizQuestion {
  id: string;
  title: string;
  answers: QuizQuestionAnswer[];
}

export interface QuizQuestionAnswer {
  id: string;
  value: string;
  weight: number;
}

export interface QuizResult {
  title: string;
  min: number;
  max: number;
}
