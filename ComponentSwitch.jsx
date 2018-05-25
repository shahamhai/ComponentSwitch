import React, { Component } from 'react';

export default class ComponentSwitch extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { children, selected } = this.props;

        return children[selected];
    }
}