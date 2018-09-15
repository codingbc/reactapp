import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isCorrect: "",
            message: ''
        };
    }

    componentDidMount = () => {
        this.setState({ isCorrect: '' });
    }

    componentWillReceiveProps = ({ isCorrect }) => {
        if (isCorrect) {
            this.setState({ isCorrect: 'correct' });
            setTimeout(() => {
                this.setState({ isCorrect: '' });
            }, 600);
        } else if (isCorrect === false) {
            this.setState({ isCorrect: 'incorrect' });
            setTimeout(() => {
                this.setState({ isCorrect: '' });
            }, 600);
        } else {
            this.setState({ isCorrect: '' });
        }
    };

    // renderMessage = () => {
    //     switch (this.state.isCorrect) {
    //         case "correct":
    //             return "Tra-la-laaa!";
    //         case "incorrect":
    //             return "Oops...incorrect!";
    //         default:
    //             return "";
    //     }
    // };

    render() {
        // this vv should be placed within the span tag on line 49, in front of the score
        // <span className={`message ${this.state.isCorrect || ''}`}>{this.renderMessage()}</span>
        return (
            <span className={`message ${this.state.isCorrect || ''}`}>
                Score: {this.props.score} / 32
            </span>
        );
    };
};

export default Score;