import React, {Component} from 'react';
import {Container} from "reactstrap";
import ContactForm from "../Components/ContactForm";
import user1 from './user1.jpg';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( // if windowSize is >
            <div style={{width: 100 +"%", height: 100 +"%" }} className="ContactPage-center">
                <Container id="Contact" className="ContactPage"/>
                <div className="ContactPage__container">
                    <div className="ContactPage-container">
                        {/*{this.getPersonalPhoto()}*/}
                        <div className="ContactPage-headerContainer">
                            <div className="ContactPage-header">I look forward to meeting you!</div>
                        </div>
                        <div className="ContactPage__contactForm">
                            <img src={user1} style={{height: "20rem", width: "20rem", borderRadius: "5px"}}/>
                        </div>
                            <ContactForm textColor="white" marBot="10rem"/>
                    </div>

                </div>
            </div>
        );
    }

    getPersonalPhoto() {
        // TODO: implement if screewidth > tabport then show my image above the contact Page
    }
}