import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello React Code</h1>;
    }
}

export default App

const appDiv = document.getElementById('app');
render(<App/>, appDiv);