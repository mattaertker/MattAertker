import React, {Component} from 'react';
import {Container} from 'reactstrap';
import TabContent from './TabContent';
import Natours from './Natours.jpg';

//TODO: take the multiple toggle functions and make them just accept a variable then have a switch statement and toggle accordingly

export default class Tabs extends Component {
    constructor (props){
        super(props);
        this.toggleNatours = this.toggleNatours.bind(this);
        this.toggleMedicare = this.toggleMedicare.bind(this);
        this.toggleHotel = this.toggleHotel.bind(this);
        this.toggleBugZoo = this.toggleBugZoo.bind(this);
        this.toggleFlightTrip = this.toggleFlightTrip.bind(this);
        this.state = {
            isNatours: true, 
            isMedicare: false,
            isHotel: false,
            isBugZoo: false,
            isFlightTrip: false
        }
    }


    render() {
        return (
            <div style={{overflowY: "scroll"}}>
                {this.renderTabs()}
                {/* {this.renderMyPortfolio()} */}
                <Container className="Tabs">
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" 
                                id="Natours" name="project" onChange={this.toggleNatours} checked={this.state.isNatours ? this.state.isNatours : null}/>
                                <label htmlFor="Natours" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">Natours</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="MedicareReimbursements" name="project" onChange={this.toggleMedicare}/>
                                <label htmlFor="MedicareReimbursements" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">Medicare Reimbursements</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="Hotel" name="project" onChange={this.toggleHotel}/>
                                <label htmlFor="Hotel" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">Hotel</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="CsuBugZoo" name="project" onChange={this.toggleBugZoo}/>
                                <label htmlFor="CsuBugZoo" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">CSU bug zoo volunteers</span>
                                </label>
                            </Container>
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="CsuFlightTrip" name="project" onChange={this.toggleFlightTrip}/>
                                <label htmlFor="CsuFlightTrip" className="Tabs__option-label">
                                    <span className="Tabs__option-button"></span>
                                    <span className="Tabs__option-text">CSU Flight Trip Itinerary</span>
                                </label>
                            </Container>
                        </Container>
                    </div>


        )
    }

    renderTabs() {
        if (this.state.isNatours) {
            return(
                <TabContent header="Natours tab" macImage={Natours}/>
            )
        }
        if (this.state.isHotel) {
            return(
                <TabContent header="Hotel tab"/>
            )
        }
        if (this.state.isMedicare) {
            return(
                <TabContent header="Medicare tab"/>
            )
        }
        if (this.state.isBugZoo) {
            return(
                <TabContent header="Bug Zoo tab"/>
            )
        }
        if (this.state.isFlightTrip) {
            return(
                <TabContent header="FlightTrip tab"/>
            )
        }
        return null;
    }

    toggleNatours() {
        this.setState({
            isNatours: true,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            isFlightTrip: false
        });
    }

    toggleHotel() {
        this.setState({
            isNatours: false,
            isHotel: true,
            isMedicare: false,
            isBugZoo: false,
            isFlightTrip: false
        });
    }

    toggleMedicare() {
        this.setState({
            isNatours: false,
            isHotel: false,
            isMedicare: true,
            isBugZoo: false,
            isFlightTrip: false
        });
    }
    toggleBugZoo() {
        this.setState({
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: true,
            isFlightTrip: false
        });
    }
    toggleFlightTrip() {
        this.setState({
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            isFlightTrip: true
        });
    }
}