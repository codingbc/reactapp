import React from 'react';
import './Header.css';
import Question from '../Question';
import Score from '../Score';

const Header = props =>
    <div>
        <nav className="navbar">
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li><Question
                    questionNum={props.questionNum}
                    question={props.question}
                    answer={props.answer}
                /></li>
                <li><Score score={props.score} isCorrect={props.isCorrect} /></li>
            </ul>
        </nav>
    </div>;

export default Header;