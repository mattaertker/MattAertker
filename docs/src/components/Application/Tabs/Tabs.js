import React, {Component} from 'react';
import {Container} from 'reactstrap';

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
            isNatours: false, 
            isMedicare: false,
            isHotel: false,
            isBugZoo: false,
            isFlightTrip: false
        }
    }


    render() {
        return (
            <div>
                <form className="Tabs">
                            <Container className="Tabs__option">
                                <input type="radio" className="Tabs__option-input" id="Natours" name="project" onChange={this.toggleNatours}/>
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
                        </form>
                        {this.renderNatours()}
                        {this.renderHotel()}
                        {this.renderMedicare()}
                        {this.renderBugZoo()}
                        {this.renderFlightTrip()}
                    </div>


        )
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

    renderNatours() {
        if (this.state.isNatours) {
            return(
                <h1>Natours Tab</h1>
            )
        }
        return null;
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

    renderHotel() {
        if (this.state.isHotel) {
            return(
                <h1>Hotel Tab</h1>
            )
        }
        return null;
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

    renderMedicare() {
        if (this.state.isMedicare) {
            return(
                <h1>Medicare Tab</h1>
            )
        }
        return null;
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

    renderBugZoo() {
        if (this.state.isBugZoo) {
            return(
                <h1>Bug Zoo Tab</h1>
            )
        }
        return null;
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

    renderFlightTrip() {
        if (this.state.isFlightTrip) {
            return(
                <h1>FlightTrip Tab</h1>
            )
        }
        return null;
    }
}