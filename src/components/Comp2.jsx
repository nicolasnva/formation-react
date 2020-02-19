import React, { Component, Fragment } from 'react';

export class Comp2 extends Component {
    state = {
        truc: "Yaha",
        bidule: "Tata",
        inputMessage: ""
    };

    clicked = () => {
        this.setState({ truc:"Top" })
    }

    inputChange = (event) => {
        this.setState({ inputMessage: event.target.value })
    }

    render() {
        return (
            <Fragment>
                <div>Hello</div>
                <div>Composant 2</div>
                <h1>{this.state.truc}</h1>
                <input type="text" onChange={this.inputChange}></input>
                <div>{this.state.inputMessage}</div>
                <button onClick={this.clicked}>Click on me please</button>
                <h1>{this.state.bidule}</h1>
            </Fragment>
        );
    }
}