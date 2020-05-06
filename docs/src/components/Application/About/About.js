import React, { Component } from 'react';
import { Container, CardText, Card, CardHeader, CardImg } from 'reactstrap';
import Certificates from './Certificates';
import HeaderSecondary from '../Components/HeaderSecondary';
import TopTech from './TopTechnologies';
import BottomTech from './BottomTechnologies';

let people = [
    {
        bio: "Hello, my name is Matt Aertker. I am pursuing a bachelors degree in applied computing " +
            "technologies with a concentration in computing technology. I am also pursuing a minors in " +
            "business administration. I love web development, software development, and problem solving. In my " +
            "spare time, I love to snowboard and teach myself new things!"
    }
];

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="About" className="About">
                <Container className="About__top" > {/* style={{backgroundImage: "linear-gradient(to bottom right, rgba($color-primary, .6), rgba($color-secondary, .6)), url('/images/ariaWinnie2.JPG')",
                                                                                backgroundPosition: 'center',
                                                                                backgroundSize: 'cover',
                                                                                backgroundRepeat: 'no-repeat'}}> */}
                    {/* <Container className="About__top-image"></Container> */}
                    <Container className="About__top-container">
                        <Container className="About__top-container-text">
                            Hey, my name is Matt Aertker, and I am a rising software developer/engineer! 
                            I work on things like the arduino, such as openbuild's blackbox, and even executable 
                            programs! My specialty is in front end web development, 
                            focusing in technologies such as React and SCSS.
                        </Container>
                    </Container>
                    
                </Container>
                <Container className="About__certificates">
                    <HeaderSecondary headerSecondary="Certificates" color={'white'} />
                    {this.getFlexTypeForCertficiates()}
                    <div className="About__certificates-line"></div>
                </Container>
                <Container className="About__mid">
                    <TopTech window={this.props.windowSizeChange} />
                    <Container className="About__mid-border">

                    </Container>
                </Container>
                <Container className="About__bottom">
                    <BottomTech window={this.props.windowSizeChange} />
                </Container>
            </Container>

        );
    }

    getFlexTypeForCertficiates() {
        return (
            <Container>
                <Container className="row-cert">
                    <Certificates
                        header={"Advanced CSS, and animations"}
                        time={40}
                        pic={"ACSS.jpg"}
                        completionDate={"Jan, 2020"}
                        cardId={"card1"}
                        description={"I completed this certificate in January of 2020, with the intent"
                                     +" of advancing my CSS, and SCSS skills, along with my ability to "
                                     +"animate web components! In this course, we completed three websites "
                                     +"of which two are displayed on my portfolio: Natours, and Hotel. I learned"
                                     +" not only how to professionally style a website, but also how to calculate "
                                     +"em's, rem's, and a bunch of other cool tricks! I have also used many of the "
                                     +"techniques and design tips he has taught throughout his course in my own personal website."}/>
                    <Certificates
                        header={"Implementing Restful Concerns"}
                        time={10}
                        pic={"Rst.jpg"}
                        cardId={"card3"}
                        completionDate={"Dec, 2019"}
                        description={"This certificate was suggested to me by my employer at NextLevelMediation, "
                                     +"and was very useful in understanding RESTful concerns and how to implement a"
                                     +" secure API that interacts with a database! Completion time took me a little "
                                     +"longer than the amount of hours on the certificate because I wanted to be sure "
                                     +"I understood some of the concepts demonstrated in this course. We practiced an MVC"
                                     +" style of backend API in c# using ASP.net."}/>

                    {/* <Certificates /> */}
                </Container>
                <Container className="row-cert">
                    <Certificates
                        header={"Hardware"}
                        time={2}
                        completionDate={"Aug, 2019"}
                        pic={"Hardware.jpg"}
                        cardId={"card2"}
                        description={"Due to the quick nature of this certificate, the goal of it was simply"
                                     +" to learn the mechanics of the hardware in my laptop and take it apart "
                                     +"to replace certain hardware parts of the laptop. "}/>

                    <Certificates
                        header={"Bachelor's degree in applied computing technology"}
                        time={128}
                        completionDate={"Dec, 2020"}
                        cardId={"card4"}
                        description={"Although this degree is in progress with an expected graduation date "
                                    +"of Dec, 2020, I have learned more than I thought was possible in my time here. "
                                    +"The most important thing I learned was how to research things I was interested in,"
                                    +" or had a question about which lead to many more opportunities in my life! I can't wait"
                                    +" to continue this adventure with a bachelors degree concluded, and many other exciting things to come!"}/>

                </Container>
            </Container>
        );
    }
}
