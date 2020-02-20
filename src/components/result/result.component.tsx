import React from "react";

import { ResultWrapper } from "./result.styles";

interface ResultProps {
  title: string;
  result: string;
  retakeQuiz: () => void;
}

export const Result: React.FC<ResultProps> = ({
  title,
  result,
  retakeQuiz
}) => {
  return (
    <ResultWrapper>
      <span className="title">{title}</span>
      <span className="result">{result}</span>
      <button type="button" className="retake" onClick={retakeQuiz}>
        Retake Quiz
      </button>
    </ResultWrapper>
  );
};
