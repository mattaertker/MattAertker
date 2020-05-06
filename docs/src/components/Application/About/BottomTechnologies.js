import React, { Component } from 'react';
import { Container } from 'reactstrap';
import HeaderSecondary from '../Components/HeaderSecondary';
import Icon from './Icon';
import Footer from '../../Margins/Footer';

export default class BottomTech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="bottomTech">
                <HeaderSecondary headerSecondary="Other Technologies" />
                {this.decideFlex()}
                <Footer/>
            </Container>
        );
    }

    decideFlex() {
        if (this.props.window > 900) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        <Icon id="java" />
                        <Icon id="php" />
                        <Icon id="c_development" />
                        <Icon id="python" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="sql" />
                        <Icon id="bash" />
                        <Icon id="blockchain" />
                    </Container>
                </Container>
            );
        }
        else if (this.props.window <= 900 && this.props.window >= 600) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        <Icon id="java" />
                        <Icon id="php" />
                        <Icon id="c_development" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="sql" />
                        <Icon id="bash" />
                    </Container>
                    <Container className="row row-topTech">
                        <Icon id="blockchain" />
                        <Icon id="python" />
                    </Container>
                </Container>
            );
        }
        return (
            <Container className="bottomTech-icons">
                <Container className="row row-topTech">
                    <Icon id="java" />
                    <Icon id="php" />
                    <Icon id="c_development" />
                    <Icon id="sql" />
                    <Icon id="bash" />
                    <Icon id="blockchain" />
                    <Icon id="python" />
                </Container>
            </Container>
        );
    }
}
