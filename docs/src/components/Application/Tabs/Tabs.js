import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TabContent from './TabContent';
import Natours from './Natours.jpg';
import Medicare from './G5_mac.jpg';
import BugZoo from './CSU_volunteers.jpg';
import Hotel from './Hotel.jpg';
import MattA from './MattAertker.jpg';
import MattAIphone from './persIphone.jpg';
import MattAIpad from './MattAIpad.jpg';
import NatIphone from './natIphone.jpg';
import TabsOption from './TabsOption';
import NatIpad from './NatIpad.jpg';
import bugZooIphone from './images/bugZoo-iphone.jpg';
import bugZooIpad from './images/bugZoo-ipad.jpg';
import G5Ipad from './images/G5-ipad.jpg';
import MedicareIphone from './images/MedicareIphone.jpg';
import HotelIphone from './images/trillo-iphone.jpg';
import HotelIpad from './images/trillo-ipad.jpg';



//TODO: take the multiple toggle functions and make them just accept a variable then have a switch statement and toggle accordingly



export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.toggleNatours = this.toggleNatours.bind(this);
        this.toggleMedicare = this.toggleMedicare.bind(this);
        this.toggleHotel = this.toggleHotel.bind(this);
        this.toggleBugZoo = this.toggleBugZoo.bind(this);
        this.displayDiv = this.displayDiv.bind(this);
        // this.toggleFlightTrip = this.toggleFlightTrip.bind(this);
        // this.rotateToMedicare = this.rotateToMedicare.bind(this);
        // this.rotateToHotel = this.rotateToHotel.bind(this);
        // this.rotateToPersonal = this.rotateToPersonal.bind(this);
        // this.rotateToBugZoo = this.rotateToBugZoo.bind(this);
        this.togglePersonal = this.togglePersonal.bind(this);
        this.state = {
            isPersonal: true,
            isNatours: false,
            isMedicare: false,
            isHotel: false,
            isBugZoo: false,
            userClick: false,
            currentTab: ''
            // isFlightTrip: false
        }
    }


    render() {
        return (
            <div style={{ overflowY: "scroll" }}>
                {this.renderTabs()}
                {/* {this.displayDiv()} */}
                <Container className="Tabs">
                    <Container className="Tabs__option">
                        <input type="radio" className="Tabs__option-input"
                            id="Personal" name="project" onChange={this.togglePersonal} checked={this.state.isPersonal ? this.state.isPersonal : null} />
                        <label htmlFor="Personal" className="Tabs__option-label">
                            <span className="Tabs__option-btnContainer">
                                <span className="Tabs__option-button"></span>
                            </span>
                            <span className="Tabs__option-text" id="Tabs__option-text" style={{ paddingLeft: "3rem" }}>Personal Site</span>
                        </label>
                    </Container>
                    <TabsOption toggle={this.toggleNatours}
                        id="Natours"
                        header="Natours" />
                    <TabsOption toggle={this.toggleMedicare}
                        id="MedicareReimbursements"
                        header="Medicare Reimbursements"
                        paddingLeft="4rem" />
                    <TabsOption toggle={this.toggleHotel}
                        id="Hotel"
                        header="Hotel" />
                    <TabsOption toggle={this.toggleBugZoo}
                        id="CsuBugZoo"
                        header="CSU bug zoo volunteers"
                        paddingLeft="5rem" />
                </Container>
            </div>


        )

    }

    renderTabs() {
        // if (!this.state.userClick)
        //     this.displayDiv();
        if (this.state.isPersonal) {
            return (
                <TabContent header="Personal Portfolio"
                    macImage={MattA}
                    iphoneImage={MattAIphone}
                    id="TabContent__Personal"
                    ipadImage={MattAIpad}
                    techUsed={"The technologies I used for this project are React, and SCSS."}
                    introText={"I began this project back January at the end of my winter break in order to get better at react and designing my own website!"}
                    goal={"The goal of this project was to display all of my personal projects I have accomplished through my degree at CSU and personal experience!"}
                    visit={"https://mattaertker.github.io/MattAertker/"}
                    github={"https://github.com/mattaertker/MattAertker"} />
            )
        }
        if (this.state.isNatours) {
            return (
                <TabContent header="Natours"
                    macImage={Natours}
                    iphoneImage={NatIphone}
                    ipadImage={NatIpad}
                    id="TabContent__Natours"
                    goal={"The goal of this project was to first get a decent baseground knowledge of advanced CSS before I moved into some more complex things!"}
                    introText={"I began this project last summer in order to learn how to develope my own website and advanced CSS! "}
                    techUsed={"The technologies I used for this project are HTML 5, and CSS."}
                    visit={"https://mattaertker.github.io/Natours/"}
                    github={"https://github.com/mattaertker/Natours"} />

            )
        }
        if (this.state.isHotel) {
            return (
                <TabContent header="Hotel"
                    macImage={Hotel}
                    iphoneImage={HotelIphone}
                    ipadImage={HotelIpad}
                    id="TabContent__Hotel"
                    goal={"The goal of this project was to practice a second form of advanced SCSS with flexbox!"}
                    techUsed={"The technologies I used for this project are HTML 5, and SCSS."}
                    introText={"I began this project last summer in order to get better with SCSS, SVG's, and animations!"}
                    visit={"https://mattaertker.github.io/HotelSite/"}
                    github={"https://github.com/mattaertker/HotelSite"} />
            )
        }
        if (this.state.isMedicare) {
            return (
                <TabContent header="Medicare Reimbursements"
                    macImage={Medicare}
                    iphoneImage={MedicareIphone}
                    ipadImage={G5Ipad}
                    id="TabContent__Medicare"
                    goal={"The goal of this website was to perform calculations for 5000 different hospital's medicare reimbursements!"}
                    introText={"I did this project with 3 other group members, and it was one of my first big websites I developed for my web development class!"}
                    techUsed={"The technologies I used for this project are HTML 5, Fuel MVC, javascript, and CSS."}
                    visit={"https://www.cs.colostate.edu/~maertker/ct310/m4/index/project"} />
            )
        }
        if (this.state.isBugZoo) {
            return (
                <TabContent header="CSU Bug Zoo"
                    macImage={BugZoo}
                    iphoneImage={bugZooIphone}
                    ipadImage={bugZooIpad}
                    id="TabContent__BugZoo"
                    goal={"The goal of this website is to provide information to the Bug zoo volunteer's at CSU about all the different species in the Zoo!"}
                    introText={"This website is in progress, and is hopefully to be used by the CSU bug zoo volunteers as a guide for taking care of the bugs!"}
                    techUsed={"The technologies I am using for this project are HTML 5, and SCSS."}
                    visit={"https://mattaertker.github.io/BugZooVolunteers/"}
                    github={"https://github.com/mattaertker/BugZooVolunteers"} />
            )
        }
        document.getElementsByClassName("TabContent").style.opacity = 1;
        return null;
    }

    togglePersonal() {
        this.setState({
            isPersonal: true,
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleNatours() {
        this.setState({
            isPersonal: false,
            isNatours: true,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleHotel() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: true,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleMedicare() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: false,
            isMedicare: true,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }
    toggleBugZoo() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: true,
            userClick: true
            // isFlightTrip: false
        });
    }
    // displayDiv() { 
    //     if (this.state.isPersonal && !this.state.userClick) {
    //         setTimeout(() => {
    //             if (!this.state.userClick) {
    //                 this.setState({
    //                     isPersonal: false,
    //                     isNatours: true,
    //                     isHotel: false,
    //                     isMedicare: false,
    //                     isBugZoo: false,
    //                 });
    //                 if (this.state.isPersonal)
    //                 document.getElementById("Personal").checked = false;
    //                 document.getElementById("Natours").checked = true;
    //                 document.getElementById('TabContent__Natours').animate([
    //                     { opacity: 0, transform: 'translateY(5rem)' },
    //                     { opacity: 1, transform: 'translateY(0)' }
    //                 ], 2000);
    //                 this.rotateToMedicare();
    //             }
    //         }, 5000);
    //     }
    // } 

    // rotateToMedicare() {
    //     if (this.state.isNatours) {
    //         setTimeout(() => {
    //             if (!this.state.userClick) {
    //                 this.setState({
    //                     isPersonal: false,
    //                     isNatours: false,
    //                     isHotel: false,
    //                     isMedicare: true,
    //                     isBugZoo: false,
    //                 })
    //                 document.getElementById("Natours").checked = false;
    //                 document.getElementById("MedicareReimbursements").checked = true;
    //                 document.getElementById('TabContent__Medicare').animate([
    //                     { opacity: 0, transform: 'translateY(5rem)' },
    //                     { opacity: 1, transform: 'translateY(0)' }
    //                 ], 2000);
    //                 this.rotateToHotel();
    //             }
    //         }, 5000);
    //     }
    // }

    // rotateToHotel() {
    //     if (this.state.isMedicare) {
    //         setTimeout(() => {
    //             if (!this.state.userClick) {
    //                 this.setState({
    //                     isPersonal: false,
    //                     isNatours: false,
    //                     isHotel: true,
    //                     isMedicare: false,
    //                     isBugZoo: false,
    //                 })
    //                 document.getElementById("MedicareReimbursements").checked = false;
    //                 document.getElementById("Hotel").checked = true;
    //                 document.getElementById('TabContent__Hotel').animate([
    //                     { opacity: 0, transform: 'translateY(5rem)' },
    //                     { opacity: 1, transform: 'translateY(0)' }
    //                 ], 2000);
    //                 this.rotateToBugZoo();
    //             }
    //         }, 5000);
    //     }
    // }

    // rotateToBugZoo() {
    //     if (this.state.isHotel) {
    //         setTimeout(() => {
    //             if (!this.state.userClick) {
    //                 this.setState({
    //                     isPersonal: false,
    //                     isNatours: false,
    //                     isHotel: false,
    //                     isMedicare: false,
    //                     isBugZoo: true,
    //                 })
    //                 document.getElementById("Hotel").checked = false;
    //                 document.getElementById("CsuBugZoo").checked = true;
    //                 document.getElementById('TabContent__BugZoo').animate([
    //                     { opacity: 0, transform: 'translateY(5rem)' },
    //                     { opacity: 1, transform: 'translateY(0)' }
    //                 ], 2000);
    //                 this.rotateToPersonal();
    //             }
    //         }, 5000);
    //     }
    // }

    // rotateToPersonal() {
    //     if (this.state.isBugZoo) {
    //         setTimeout(() => {
    //             if (!this.state.userClick) {
    //                 this.setState({
    //                     isPersonal: true,
    //                     isNatours: false,
    //                     isHotel: false,
    //                     isMedicare: false,
    //                     isBugZoo: false,
    //                 })
    //                 document.getElementById("CsuBugZoo").checked = false;
    //                 document.getElementById("Personal").checked = true;
    //                 document.getElementById('TabContent__Personal').animate([
    //                     { opacity: 0, transform: 'translateY(5rem)' },
    //                     { opacity: 1, transform: 'translateY(0)' }
    //                 ], 2000);
    //                 // this.displayDiv();
    //             }
    //         }, 5000);
    //     }
    // }
}