export interface FormikValues {
  [key: string]: string;
}

export interface QuizData {
  id: string;
  title: string;
  imgUrl: string;
  questions: QuizQuestion[];
  results: string[];
}

export interface QuizQuestion {
  id: string;
  title: string;
  answers: QuizQuestionAnswer[];
}

export interface QuizQuestionAnswer {
  id: string;
  value: string;
}
