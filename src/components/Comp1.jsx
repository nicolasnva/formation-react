import React, { Component, Fragment } from 'react';

export class Comp1 extends Component {
    state = {
        truc: "Youhou",
        bidule: "Toto"
    };

    clicked = () => {
        this.setState({ truc:"Super cool" })
    }

    render() {
        return (
            <Fragment>
                <div>Hello</div>
                <div>Composant 1</div>
                <h1>{this.state.truc}</h1>
                <button onClick={this.clicked}>Click me</button>
                <h1>{this.state.bidule}</h1>
                <h1>{this.props.variable}</h1>
            </Fragment>
        );
    }
}