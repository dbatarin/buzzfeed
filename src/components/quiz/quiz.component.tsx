import React, { useCallback, useState } from "react";
import { useFormik } from "formik";

import { QuizWrapper } from "./quiz.styles";
import { quizData } from "./quiz.data";
import { Question } from "../question/question.component";
import { Result } from "../result/result.component";
import { QuizQuestion, QuizFormValues } from "./quiz.types";

export const Quiz = () => {
  const [result, setResult] = useState<string | null>(null);
  const [weight, setWeight] = useState<number>(0);

  const formik = useFormik<QuizFormValues>({
    initialValues: {},
    onSubmit: () => {
      const findResult = quizData.results.find(
        r => weight >= r.min && weight <= r.max
      );

      setResult(
        findResult
          ? findResult.title
          : "Ooops! Something wrong with our calculations :("
      );
    }
  });

  const handleChange = useCallback(
    (field: string, value: any, answerWeight: number) => {
      formik.setFieldValue(field, value);
      setWeight(weight + answerWeight);

      if (Object.keys(formik.values).length + 1 === quizData.questions.length) {
        formik.submitForm();
      }
    },
    [formik.values, weight]
  );

  const retakeQuiz = useCallback(() => {
    formik.resetForm();
    setResult(null);
    setWeight(0);
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
          result={result}
          retakeQuiz={retakeQuiz}
          quizData={quizData}
          values={formik.values}
        />
      )}
    </QuizWrapper>
  );
};
