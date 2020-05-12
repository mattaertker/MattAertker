import  React, {Component} from 'react';
import {Container} from 'reactstrap';


export default class TabsOption extends Component {
    constructor (props){
        super(props);
    }

    render() {
        if (document.getElementById(this.props.href))
            console.log("element exists:", this.props.hRef);
        // console.log(this.props.hRef);
        return (
            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" 
                                id={this.props.id} name="project" onChange={this.props.toggle} checked={this.props.state} href={this.props.hRef}/>
                                <label htmlFor={this.props.id} className="Tabs__option-label">
                                    <span className="Tabs__option-btnContainer">
                                        <span className="Tabs__option-button"></span>
                                    </span>
                                    <span className="Tabs__option-text" id="Tabs__option-text" style={{paddingLeft: this.props.paddingLeft}}>{this.props.header}</span>
                                </label>
                            </Container>
        );
    }
}