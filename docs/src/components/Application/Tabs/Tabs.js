import React, {Component} from 'react';
import {Container} from 'reactstrap';
import TabContent from './TabContent';
import Natours from './Natours.jpg';
import Medicare from './G5_mac.jpg';
import BugZoo from './CSU_volunteers.jpg';
import Hotel from './Hotel.jpg';
import MattA from './MattAertker.jpg';

//TODO: take the multiple toggle functions and make them just accept a variable then have a switch statement and toggle accordingly

export default class Tabs extends Component {
    constructor (props){
        super(props);
        this.toggleNatours = this.toggleNatours.bind(this);
        this.toggleMedicare = this.toggleMedicare.bind(this);
        this.toggleHotel = this.toggleHotel.bind(this);
        this.toggleBugZoo = this.toggleBugZoo.bind(this);
        // this.toggleFlightTrip = this.toggleFlightTrip.bind(this);
        this.togglePersonal = this.togglePersonal.bind(this);
        this.state = {
            isPersonal: true,
            isNatours: false, 
            isMedicare: false,
            isHotel: false,
            isBugZoo: false,
            // isFlightTrip: false
        }
    }


    render() {
        return (
            <div style={{overflowY: "scroll"}}>
                {this.renderTabs()}
                <Container className="Tabs">
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" 
                                id="Personal" name="project" onChange={this.togglePersonal} checked={this.state.isPersonal ? this.state.isPersonal : null}/>
                                <label htmlFor="Personal" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text" id="Tabs__option-text">Personal Site</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" 
                                id="Natours" name="project" onChange={this.toggleNatours} />
                                <label htmlFor="Natours" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text" id="Tabs__option-text">Natours</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="MedicareReimbursements" name="project" onChange={this.toggleMedicare}/>
                                <label htmlFor="MedicareReimbursements" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text" id="Tabs__option-text">Medicare Reimbursements</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="Hotel" name="project" onChange={this.toggleHotel}/>
                                <label htmlFor="Hotel" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text" id="Tabs__option-text">Hotel</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="CsuBugZoo" name="project" onChange={this.toggleBugZoo}/>
                                <label htmlFor="CsuBugZoo" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text" id="Tabs__option-text">CSU bug zoo volunteers</span>
                                </label>
                            </Container>
                            {/* <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="CsuFlightTrip" name="project" onChange={this.toggleFlightTrip}/>
                                <label htmlFor="CsuFlightTrip" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">CSU Flight Trip Itinerary</span>
                                </label>
                            </Container> */}
                        </Container>
                    </div>


        )
    }

    renderTabs() {
        if (this.state.isPersonal) {
            return(
                <TabContent header="Personal Portfolio" 
                            macImage={MattA} 
                            techUsed={"The technologies I used for this project are React, and SCSS."}
                            introText={"I began this project back January at the end of my winter break in order to get better at react and designing my own website!"}
                            goal={"The goal of this project was to display all of my personal projects I have accomplished through my degree at CSU and personal experience!"}
                            visit={"https://mattaertker.github.io/MattAertker/"}
                            github={"https://github.com/mattaertker/MattAertker"}/>
            )
        }
        if (this.state.isNatours) {
            return(
                <TabContent header="Natours" 
                            macImage={Natours} 
                            goal={"The goal of this project was to first get a decent baseground knowledge of advanced CSS before I moved into some more complex things!"}
                            introText={"I began this project last summer in order to learn how to develope my own website and advanced CSS! "}
                            techUsed={"The technologies I used for this project are HTML 5, and CSS."}
                            visit={"https://mattaertker.github.io/Natours/"} 
                            github={"https://github.com/mattaertker/Natours"}/>
            )
        }
        if (this.state.isHotel) {
            return(
                <TabContent header="Hotel" 
                            macImage={Hotel} 
                            goal={"The goal of this project was to practice a second form of advanced SCSS with flexbox!"}
                            techUsed={"The technologies I used for this project are HTML 5, and SCSS."}
                            introText={"I began this project last summer in order to get better with SCSS, SVG's, and animations!"}
                            visit={"https://mattaertker.github.io/HotelSite/"} 
                            github={"https://github.com/mattaertker/HotelSite"}/>
            )
        }
        if (this.state.isMedicare) {
            return(
                <TabContent header="Medicare Reimbursements"   
                            macImage={Medicare}
                            goal={"The goal of this website was to perform calculations for 5000 different hospital's medicare reimbursements!"}
                            introText={"I did this project with 3 other group members, and it was one of my first big websites I developed for my web development class!"}
                            techUsed={"The technologies I used for this project are HTML 5, Fuel MVC, javascript, and CSS."}
                            visit={"https://www.cs.colostate.edu/~maertker/ct310/m4/index/project"}/>
            )
        }
        if (this.state.isBugZoo) {
            return(
                <TabContent header="CSU Bug Zoo"  
                            macImage={BugZoo}
                            goal={"The goal of this website is to provide information to the Bug zoo volunteer's at CSU about all the different species in the Zoo!"}
                            introText={"This website is in progress, and is hopefully to be used by the CSU bug zoo volunteers as a guide for taking care of the bugs!"}
                            techUsed={"The technologies I am using for this project are HTML 5, and SCSS."}
                            visit={"https://mattaertker.github.io/BugZooVolunteers/"} 
                            github={"https://github.com/mattaertker/BugZooVolunteers"}/>
            )
        }
        // if (this.state.isFlightTrip) {
        //     return(
        //         <TabContent header="FlightTrip tab"  macImage={Medicare}/>
        //     )
        // }
        return null;
    }

    togglePersonal() {
        this.setState({
            isPersonal: true,
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
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
            // isFlightTrip: false
        });
    }
    // toggleFlightTrip() {
    //     this.setState({
    //         isPersonal: false,
    //         isNatours: false,
    //         isHotel: false,
    //         isMedicare: false,
    //         isBugZoo: false,
    //         isFlightTrip: true
    //     });
    // }
}