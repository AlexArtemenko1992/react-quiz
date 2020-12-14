import React from "react";
import "./AnswerList.css";

import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = (props) => {
  return (
    <ul className="answer-list">
      {props.answers.map((answer, i) => (
        <AnswerItem
          answer={answer}
          key={i}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      ))}
    </ul>
  );
};

export default AnswerList;
