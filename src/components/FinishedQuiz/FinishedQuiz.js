import React from "react";
import "./FinishedQuiz.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
  const successAnswer = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className="finished-quiz">
      <ul>
        {props.quiz.map((quizItem, i) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
          ];
          return (
            <li key={i}>
              {i + 1}. {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p className="finished-result">
        Правильно {successAnswer} из {props.quiz.length}
      </p>
      <div className="button-group">
        <Button onClick={props.onRetry} type="success">
          Повторить
        </Button>
        <Button onClick={props.onRetryToQuizesList} type="error">
          Перейти в список тестов
        </Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
