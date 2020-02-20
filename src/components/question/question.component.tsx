import React, { useCallback } from "react";

import { QuizQuestion, QuizQuestionAnswer } from "../quiz/quiz.types";
import { QuestionWrapper } from "./question.styles";
import { Answer } from "../answer/answer.component";

interface QuestionProps {
  data: QuizQuestion;
  handleChange: (field: string, value: any) => void;
  value?: string;
}

export const Question: React.FC<QuestionProps> = ({
  data,
  handleChange,
  value
}) => {
  const renderAnswers = useCallback(
    (answer: QuizQuestionAnswer) => {
      return (
        <Answer
          data={answer}
          questionId={data.id}
          key={answer.id}
          handleChange={handleChange}
          isSelected={value === answer.id}
          isDisabled={value !== undefined}
        />
      );
    },
    [value]
  );

  return (
    <QuestionWrapper>
      <span className="title">{data.title}</span>
      {data.answers.map(renderAnswers)}
    </QuestionWrapper>
  );
};
