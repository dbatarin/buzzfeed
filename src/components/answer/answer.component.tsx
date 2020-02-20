import React, { useCallback } from "react";

import { QuizQuestionAnswer } from "../quiz/quiz.types";
import { AnswerLabel } from "./answer.styles";

interface AnswerProps {
  data: QuizQuestionAnswer;
  questionId: string;
  isSelected: boolean;
  isDisabled: boolean;
  handleChange: (field: string, value: any, weight: number) => void;
}

export const Answer: React.FC<AnswerProps> = ({
  data,
  questionId,
  handleChange,
  isSelected,
  isDisabled
}) => {
  const onChange = useCallback(() => {
    handleChange(questionId, data.id, data.weight);
  }, []);

  return (
    <AnswerLabel selected={isSelected} deactivated={isDisabled}>
      <input
        type="radio"
        name={questionId}
        onChange={onChange}
        disabled={isDisabled}
        checked={isSelected}
      />{" "}
      {data.value}
    </AnswerLabel>
  );
};
