import React, {Component} from 'react';
import {Container} from 'reactstrap';

export default class Tabs extends Component {
    constructor (props){
        super(props);
    }

    // position: absolute;
    // height: 140rem;
    // width: 80%;
    // margin: 0 10%;
    // background-color: red;
    // overflow: auto;

    render() {
        return(
            <div className="TabContent" style={{overflowY: "scroll"}}>{this.props.header}</div>
        )
    }
}