import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class BottomTech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="col-1-of-5">
                <Container className={"topTech-icon topTech-icon-" + this.props.id} id={this.props.id}
                    style={{backgroundImage: "url(./images/" + this.props.id +".jpg)", 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}} >

                </Container>
            </Container>
        );
    }
}