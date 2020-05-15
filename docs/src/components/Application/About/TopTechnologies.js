import React, { Component, Image } from 'react';
import { Container } from 'reactstrap';
import HeaderSecondary from '../Components/HeaderSecondary';
import Icon from './Icon';

export default class TopTech extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <Container className="topTech">
                <HeaderSecondary headerSecondary="Top Technologies" />
                {/* <Container className="topTech-icons"> */}
                {this.decideFlex()}
                {/* </Container> */}
            </Container>
        );
    }

    decideFlex() {
        if (this.props.window > 900) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        <Icon id="html" />
                        <Icon id="css" />
                        <Icon id="scss" />
                        <Icon id="react" />
                        <Icon id="javascript" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="jQuery" />
                        <Icon id="nodejs" />
                        <Icon id="bootstrap" />
                        <Icon id="angular" />
                    </Container>
                </Container>
            );
        }
        else if (this.props.window <= 900 && this.props.window >= 600) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        <Icon id="html" />
                        <Icon id="css" />
                        <Icon id="scss" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="jQuery" />
                        <Icon id="nodejs" />
                        <Icon id="react" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="javascript" />
                        <Icon id="bootstrap" />
                        <Icon id="angular" />
                    </Container>
                </Container>
            );
        }
        return (
            <Container>
                <Container className="row row-topTech">
                    <Icon id="html" />
                    <Icon id="css" />
                    <Icon id="scss" />
                    <Icon id="jQuery" />
                    <Icon id="nodejs" />
                    <Icon id="react" />
                    <Icon id="javascript" />
                    <Icon id="bootstrap" />
                    <Icon id="angular" />
                </Container>
            </Container>
        );
    }

    _onLoad() {
        this.setState(() => ({ loaded: true }))
    }
}
