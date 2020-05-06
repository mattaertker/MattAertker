import React, { Component, Image } from 'react';
import { Container } from 'reactstrap';
import HeaderSecondary from '../Components/HeaderSecondary';

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
                <HeaderSecondary headerSecondary="Top Technologies"/>
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
                        {this.renderIcon("html")}
                        {this.renderIcon("css")}
                        {this.renderIcon("scss")}
                        {this.renderIcon("react")}
                        {this.renderIcon("javascript")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("jQuery")}
                        {this.renderIcon("nodejs")}
                        {this.renderIcon("bootstrap")}
                        {this.renderIcon("angular")}
                    </Container>
                </Container>
            );
        }
        else if (this.props.window <= 900 && this.props.window >= 600) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("html")}
                        {this.renderIcon("css")}
                        {this.renderIcon("scss")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("jQuery")}
                        {this.renderIcon("nodejs")}
                        {this.renderIcon("react")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("javascript")}
                        {this.renderIcon("bootstrap")}
                        {this.renderIcon("angular")}
                    </Container>
                </Container>
            );
        }
        return (
            <Container>
                <Container className="row row-topTech">
                    {this.renderIcon("html")}
                    {this.renderIcon("css")}
                    {this.renderIcon("scss")}
                    {this.renderIcon("jQuery")}
                    {this.renderIcon("nodejs")}
                    {this.renderIcon("react")}
                    {this.renderIcon("javascript")}
                    {this.renderIcon("bootstrap")}
                    {this.renderIcon("angular")}
                </Container>
            </Container>
        );
    }

    renderIcon(id) {
        return (
            <Container className={"col-1-of-5 col-1-of-5-" + id}>
                <Container className={"topTech-icon topTech-icon-" + id} id={id}
                    style={{backgroundImage: "url(./images/" + id +".jpg)", 
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}} >
                    {/* <img src={"./images/" +id +".jpg"}
                            onLoad={this._onLoad}/> */}

                    
                </Container>
                {/* {!this.state.loaded &&
                        <div>Did Not Load Yet</div>} */}
            </Container>
        );
    }

    _onLoad() {
        this.setState(() => ({ loaded: true }))
    }
}
