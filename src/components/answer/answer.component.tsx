import React, { useCallback } from "react";

import { QuizQuestionAnswer } from "../quiz/quiz.data";
import { AnswerLabel } from "./answer.styles";

interface AnswerProps {
  data: QuizQuestionAnswer;
  questionId: string;
  isSelected: boolean;
  isDisabled: boolean;
  handleChange: (field: string, value: any) => void;
}

export const Answer: React.FC<AnswerProps> = ({
  data,
  questionId,
  handleChange,
  isSelected,
  isDisabled
}) => {
  const onChange = useCallback(() => {
    handleChange(questionId, data.id);
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
