import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    submitNumber = (event) => {
        const numberOfEvents = event.target.value;
        this.setState({
            numberOfEvents,
        });
    }
    render() {
        return (
            <div className="numberOfEvents">
                <input
                    type="text"
                    className="numberInput"
                    value={this.state.numberOfEvents}
                    onChange={this.submitNumber}
                />
            </div>
        )
    }
}

export default NumberOfEvents;