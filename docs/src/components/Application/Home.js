import React,{Component} from 'react'
import {Container} from 'reactstrap';
import ThreeDCube from "./Components/3dcube/threeDCube";
import Waves from "./Components/wave";
import ContactForm from './Components/ContactForm';
import Footer from "../Margins/Footer";
import Button from "react-bootstrap/Button";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.setPageAbout = this.setPageAbout.bind(this);
        this.setPagePortfolio = this.setPagePortfolio.bind(this);
        this.state = {
            heightLevel: 100,
        };
    }

    render() {
        return (
            <Container >
                {this.startPage()}
                {this.intro()}
                {this.showCase()}
                {this.contactForm()}
                <Footer/>
            </Container>
        );
    }

    startPage() {
        return (
            <Container id="Home" className="Home-container">
                <Container className="Home">
                    <h2 className="Home__header"><div className="Home__header-text">DigitalWebFlex</div></h2>
                </Container>
                <div className="animation-area">
                    <ul className="box-area">
                        <li className="box-area-1"><ThreeDCube season="Fall"/></li>
                        <li className="box-area-2"><ThreeDCube season="Winter"/></li>
                        <li className="box-area-3"><ThreeDCube season="Forest"/></li>
                    </ul>
                </div>
            </Container>
        );
    }

    intro() {
        return (
            <Container className="intro">
                <Container className="intro-text">
                    Hello, are you in need of a passionate, hard-working developer? Search no more,
                    because I am ready for the job! With almost 4 years of experience through classes
                    with Colorado State University, personal projects, and multiple online courses, I
                    can step into almost any role and succeed! <a href="#Contact-Page" className="intro-Contact-link">Contact me today!</a>
                </Container>
                <Button className="button button--animated button--gradient intro-button" href="#About" onClick={this.setPageAbout}>About Me</Button>
            </Container>
        );
    }

    showCase() {
        return (
            <Container className="showcase">
                <Waves className="showcase__container" id="showcase__container" setPagePortfolio={this.setPagePortfolio} setAppPage={this.props.setAppPage}/>
            </Container>
        );
    }

    contactForm() {
        return (
            <Container className="portfolio__home" id="Contact-Page">
                <Container className="portfolio__home-left"></Container>
                <Container className="portfolio__home-mid">
                    <div style={{marginTop: "3rem"}}>
                        <ContactForm/>
                    </div>
                </Container>
                <Container className="portfolio__home-right"></Container>
            </Container>
        );
    }

    setPageAbout() {
        this.props.setAppPage('about');
        // VANTA.WAVES({
        //     el: ".showcase__container",
        //     color: 0x202082
        // })
    }
    setPagePortfolio() {
        this.props.setAppPage('portfolio');
        VANTA.WAVES({
            el: ".showcase__container",
            color: 0x202082
        })
    }

}
