import React, { Component } from 'react';
import ReactDOM from 'react_dom';


class App extends Component {
    render() {
        return <h1>React App</h1>
    }
}

ReactDOM.render(<App /> , document.getElementById('app'))