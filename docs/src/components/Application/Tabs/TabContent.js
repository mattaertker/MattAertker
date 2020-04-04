import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Challenge from './challenge.jpg';
import Goal from './goal.jpg';
import Natours from './Natours.jpg';

export default class Tabs extends Component {
    constructor (props){
        super(props);
    }

    render() {
        return(
            <div className="TabContent">
                <Container className="TabContent__header">{this.props.header}</Container>
                <Container className="TabContent__images">
                    <Container className="TabContent__images-left">{this.props.iphoneImage}</Container>    
                    <img src={this.props.macImage} className="TabContent__images-mid"/>    
                    <Container className="TabContent__images-right">{this.props.ipadImage}</Container>    
                </Container>
                <Container className="TabContent__link">
                    <a className="TabContent__link-left" href={this.props.github} target="_blank">Github</a>
                    <a className="TabContent__link-right" href={this.props.visit} target="_blank">Live Link</a>
                </Container>
                <Container className="TabContent__description">
                    <Container className="TabContent__description-tech">
                    {/* <span className="TabContent__description-intro-challenge"> */}
                        <Container className="TabContent__description-tech-Left">{"</> "}</Container>
                        <span className="TabContent__description-tech-Left-tech">Technology</span>
                    {/* </span>      */}
                        <Container className="TabContent__description-tech-right">{this.props.techUsed}</Container>    
                    </Container>
                    <Container className="TabContent__description-intro">
                        <span className="TabContent__description-intro-challenge">
                            <img className="TabContent__description-intro-Left" src={Challenge} alt="challenge"/>
                            <span className="TabContent__description-tech-Left-tech">Challenges</span>
                        </span>    
                        <Container className="TabContent__description-intro-right">{this.props.introText}</Container>
                    </Container>
                    <Container className="TabContent__description-goal">
                        <Container className="TabContent__description-goal-Left">
                            <img className="TabContent__description-goal-Left-1" src={Goal} alt="challenge"/>
                            <span className="TabContent__description-goal-Left-2">Goal</span>    
                        </Container>    
                        <Container className="TabContent__description-goal-right">{this.props.goal}</Container>
                    </Container>
                </Container>    
            </div>
        )
    }
}