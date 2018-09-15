import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="overlay"></div>
                <div className="background-img"></div>
                <div className="caption">
                    <h1>Clicky Game x Captain Underpants</h1>
                    <p>Answer the questions above by clicking on a character below!</p>
                </div>
            </div>
        );
    };
};

export default Jumbotron;