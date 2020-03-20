import React, {Component} from 'react';
import {Container} from 'reactstrap';
import PortfolioCard from "./PortfolioCard";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="Portfolio" className="PortContainer">
                <Container className="PortContainer__cardContainer">
                    <form className="Tabs">
                        <Container className="Tabs__option">
                            <input type="radio" className="Tabs__option-input" id="Natours" name="project"/>
                            <label for="Natours" className="Tabs__option-label">
                                <span className="Tabs__option-button"></span>
                                <span className="Tabs__option-text">Natours</span>
                            </label>
                        </Container>
                        <Container className="Tabs__option">
                            <input type="radio" className="Tabs__option-input" id="MedicareReimbursements" name="project"/>
                            <label for="MedicareReimbursements" className="Tabs__option-label">
                                <span className="Tabs__option-button"></span>
                                <span className="Tabs__option-text">Medicare Reimbursements</span>
                            </label>
                        </Container>
                        <Container className="Tabs__option">
                            <input type="radio" className="Tabs__option-input" id="Hotel" name="project"/>
                            <label for="Hotel" className="Tabs__option-label">
                                <span className="Tabs__option-button"></span>
                                <span className="Tabs__option-text">Hotel</span>
                            </label>
                        </Container>
                        <Container className="Tabs__option">
                            <input type="radio" className="Tabs__option-input" id="CsuBugZoo" name="project"/>
                            <label for="CsuBugZoo" className="Tabs__option-label">
                                <span className="Tabs__option-button"></span>
                                <span className="Tabs__option-text">CSU bug zoo volunteers</span>
                            </label>
                        </Container>
                        <Container className="Tabs__option">
                            <input type="radio" className="Tabs__option-input" id="CsuFlightTrip" name="project"/>
                            <label for="CsuFlightTrip" className="Tabs__option-label">
                                <span className="Tabs__option-button"></span>
                                <span className="Tabs__option-text">CSU Flight Trip Itinerary</span>
                            </label>
                        </Container>
                    </form>

                    {/* <Container className="PortCardContainer__cardContainer-left">
                        <PortfolioCard cardHeader="Natours"
                                       source="Natours"
                                       PortKey="Natours"
                                       PortHref="https://www.cs.colostate.edu/~maertker/AdvancedCSS/"
                                       description="This is a website that is implemented purely for display,
                                                and is meant to demonstrate a tour website."/>
                        <PortfolioCard cardHeader="Csu Flight Trip Itinerary"
                                       PortKey="CsuFlightTripItinerary"
                                       PortHref="#CsuFlightTripItinerary"
                                       description="This website is meant to imitate an airline website. We
                                                calculated optimized distances globally from a JSON file of 'places' "/>
                        <PortfolioCard cardHeader="Medicare Reimbursements"
                                       PortKey="MedicareReimbursements"
                                       source="Medicare"
                                       PortHref="https://www.cs.colostate.edu/~maertker/ct310/m4/index/project"
                                       description="This is a website that calculates a hospital's medicare reimbursements
                                                for over 5000 hospitals across the country."/>
                    </Container>
                    <Container className="PortCardContainer__cardContainer-right">
                        <PortfolioCard cardHeader="Hotel search site"
                                       PortKey="HotelSearchSite"
                                       source="Hotel"
                                       PortHref="https://cs.colostate.edu/~maertker/Udemy/"
                                       description="This is a website that is implemented purely for display,
                                                and is meant to demonstrate a hotel website."/>
                        <PortfolioCard cardHeader="Csu Bug Zoo"
                                       PortKey="CsuBugZoo"
                                       source="CsuBugZoo"
                                       PortHref="https://www.cs.colostate.edu/~maertker/csuBugZooVolunteer/csubugzoo/"
                                       description="This is a website that is undergoing, but will be used for
                                                volunteers at the csu bug zoo."/>
                        <PortfolioCard cardHeader="Videography site"
                                       PortKey="VideographySite"
                                       PortHref="#Video"
                                       description="This is a website that is undergoing, and will be used as a display
                                                website to demonstrate a website for photographers."/>
                    </Container> */}
                </Container>
            </Container>
        );
    }
}