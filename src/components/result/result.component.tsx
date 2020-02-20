import React, { useMemo } from "react";

import { ResultWrapper } from "./result.styles";
import { QuizData } from "../quiz/quiz.types";

interface ResultProps {
  result: string;
  quizData: QuizData;
  values: { [key: string]: string };
  retakeQuiz: () => void;
}

export const Result: React.FC<ResultProps> = ({
  result,
  retakeQuiz,
  quizData,
  values
}) => {
  const answers = useMemo(() => {
    const questionIds = Object.keys(values);
    const res = questionIds.map(questionId => {
      const question = quizData.questions.find(q => q.id === questionId);
      const answer = question?.answers.find(a => a.id === values[questionId]);

      return `${question?.title} - ${answer?.value}`;
    });

    return res.join("\n");
  }, [values]);

  return (
    <ResultWrapper>
      <span className="title">{quizData.title}</span>
      <span className="result">{result}</span>
      <button type="button" className="retake" onClick={retakeQuiz}>
        Retake Quiz
      </button>

      <h3>Saved results</h3>
      <pre>{JSON.stringify(values, null, 2)}</pre>

      <h3>Parsed results</h3>
      <pre>{answers}</pre>
    </ResultWrapper>
  );
};
