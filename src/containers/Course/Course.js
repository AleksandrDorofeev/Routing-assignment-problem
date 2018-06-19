import React, { Component } from 'react';

class Course extends Component {
    state = {
        parse: ''
    }

    componentDidMount() {
        console.log(this.props)
        let parseQuery = new URLSearchParams(this.props.location.search);
        for(let string of parseQuery) {
            this.setState({parse: string[1]})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.parse}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;