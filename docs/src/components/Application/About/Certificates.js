import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Certificates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="col-1-of-4">
                {this.renderCards()}
            </Container>
        );

    }

    renderCards() {
        return (
            <div className="wrapper">
                <div className="card">
                    <input type="checkbox" id={this.props.cardId} className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: "url(./images/" + this.props.pic + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="inner">
                                <h2 style={{ color: 'black' }}>{this.props.header}</h2>
                                <label htmlFor={this.props.cardId} className="detailsBtn" aria-hidden="true">
                                    Details
                                    </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info" style={{ marginRight: '2rem', fontSize: "2rem" }}>
                                    <span style={{ fontSize: "2.3rem" }}>{this.props.completionDate}</span>
                                    <div className="icon">
                                        <i className="fa fa-check"></i>
                                        <span >Date of</span>
                                        <span >Completion</span>
                                    </div>
                                </div>
                                <div className="info" style={{ fontSize: "2rem" }}>
                                    <span>{this.props.time}</span>
                                    <div className="icon">
                                        <i className="fa fa-clock-o"></i>
                                        <span >Time</span>
                                        <span >(hours)</span>
                                    </div>
                                </div>
                                <div className="description" style={{ fontSize: '1.8rem' }}>
                                    <p>{this.props.description}</p>
                                </div>
                                <div className="cert-name">{this.props.header}</div>
                                <label htmlFor={this.props.cardId} className="detailsBtn return" aria-hidden="true">
                                    <i className="fa fa-arrow-left mt-75"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}