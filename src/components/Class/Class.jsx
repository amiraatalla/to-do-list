
import React, { Component } from 'react';

export default class Class extends Component {
    state = { myName: "Amira Atallah" };
    changeName = () => {
        this.setState({ myName: "Amira Reda" });
    }
    render() {
        return <>
            <h1>Class Component</h1>
            <h3>{this.state.myName}</h3>
            <button className='btn-danger' onClick={this.changeName}>change name</button>
        </>
    }
}