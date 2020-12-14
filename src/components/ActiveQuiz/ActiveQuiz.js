import React from "react";
import "./ActiveQuiz.css";

import AswerList from "../AnswerList/AnswerList";

const ActiveQuiz = (props) => {
  return (
    <div className="active-quiz">
      <p className="active-quiz_header">
        <span className="active-quiz_question">
          <strong>{props.answerNumber}. </strong>
          {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>
      <AswerList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
