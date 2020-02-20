import React, { useCallback, useState } from "react";
import { useFormik } from "formik";

import { QuizWrapper } from "./quiz.styles";
import { quizData, QuizQuestion } from "./quiz.data";
import { Question } from "../question/question.component";
import { Result } from "../result/result.component";
import { getRandomInt } from "../../utils/numbers";

interface FormikValues {
  [key: string]: string;
}

export const Quiz = () => {
  const [result, setResult] = useState<string | null>(null);

  const formik = useFormik<FormikValues>({
    initialValues: {},
    onSubmit: () => {
      const randomInt = getRandomInt(quizData.results.length - 1);
      setResult(quizData.results[randomInt]);
    }
  });

  const handleChange = useCallback(
    (field: string, value: any) => {
      formik.setFieldValue(field, value);

      if (Object.keys(formik.values).length + 1 === quizData.questions.length) {
        formik.submitForm();
      }
    },
    [formik.values]
  );

  const retakeQuiz = useCallback(() => {
    formik.resetForm();
    setResult(null);
  }, []);

  const renderQuestions = useCallback(
    (question: QuizQuestion, index: number) => {
      if (Object.keys(formik.values).length < index) return null;

      return (
        <Question
          data={question}
          key={question.id}
          handleChange={handleChange}
          value={formik.values[question.id]}
        />
      );
    },
    [handleChange, formik.values]
  );

  return (
    <QuizWrapper>
      <span className="title">{quizData.title}</span>
      <img src={quizData.imgUrl} className="gif" />
      {quizData.questions.map(renderQuestions)}
      {result && (
        <Result
          title={quizData.title}
          result={result}
          retakeQuiz={retakeQuiz}
        />
      )}
    </QuizWrapper>
  );
};
