import React, { Component } from "react";

class Event extends Component {
    state = {
        showDetails: false
    };
    showDetails = () => {
        if (this.state.show === true) {
            this.setState({ show: false, showButton: 'show details' });
        } else {
            this.setState({ show: true, showButton: 'hide details' });
        }
    };
    render() {
        const { event } = this.props;
        return (
            <div className="eventContainer">
                <h1>{event.summary}</h1>
                <p>{event.start.dateTime}</p>
                <p>{event.location}</p>
                {this.state.showDetails && (
                    <div className='eventDetails'>
                        <h2>About event:</h2>
                        <a href={event.htmlLink}>See Details on Google Calendar</a>
                        <p>{event.description}</p>
                    </div>
                )}
                <button
                    className="show-btn"
                    onClick={() => this.showDetails()}
                >
                    {!this.state.showDetails ? 'show details' : 'hide details'}
                </button>
            </div>
        );

    }
}
export default Event;