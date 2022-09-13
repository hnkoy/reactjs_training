import React, { Component } from "react";

class Horloge extends Component {
    state = {
        date: new Date(),
        counter: 1
    }
    tick = () => {
        this.setState((oldState, props) => {
            return {
                date: new Date(),
                counter: oldState.counter + 1
            }

        }

        );

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    render() {
        //console.log('component render');
        return (
            <>
                <h1>Horloge {this.state.date.toLocaleTimeString()}</h1>
                <p>{this.state.counter}</p>
            </>

        )
    }
}
export default Horloge;