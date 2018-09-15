import React from 'react';
// import './Question.css';

const Question = props =>
    <span>
        <span className="question-num">{props.questionNum}) </span>
        {props.question}
    </span>;

export default Question;