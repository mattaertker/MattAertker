import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TabContent from './TabContent';
import TabsOption from './TabsOption';


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
        this.rotateToMedicare = this.rotateToMedicare.bind(this);
        this.rotateToHotel = this.rotateToHotel.bind(this);
        this.rotateToPersonal = this.rotateToPersonal.bind(this);
        this.rotateToBugZoo = this.rotateToBugZoo.bind(this);
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
                    <TabsOption toggle={this.togglePersonal}
                        id="Personal"
                        hRef="#TabContent__Personal"
                        header="Personal" state={this.state.isPersonal} />
                    <TabsOption toggle={this.toggleNatours}
                        id="Natours"
                        hRef="#TabContent__Natours"
                        header="Natours" state={this.state.isNatours} />
                    <TabsOption toggle={this.toggleMedicare}
                        id="MedicareReimbursements"
                        hRef="#TabContent__Medicare"
                        header="Medicare Reimbursements"
                        paddingLeft="4rem" state={this.state.isMedicare} />
                    <TabsOption toggle={this.toggleHotel}
                        id="Hotel"
                        hRef="#TabContent__Hotel"
                        header="Hotel" state={this.state.isHotel} />
                    <TabsOption toggle={this.toggleBugZoo}
                        id="CsuBugZoo"
                        hRef="#TabContent__BugZoo"
                        header="CSU bug zoo volunteers"
                        paddingLeft="5rem" state={this.state.isBugZoo} />
                </Container>
            </div>


        )

    }

    renderTabs() {
        let Natours =  'https://mattaertker.github.io/MattAertker/images/Natours-7f7a7772.jpg';
        let Medicare =  'https://mattaertker.github.io/MattAertker/images/G5_mac-82b150fa.jpg';
        let BugZoo =  'https://mattaertker.github.io/MattAertker/images/CSU_volunteers-5829285e.jpg';
        let Hotel =  'https://mattaertker.github.io/MattAertker/images/Hotel-19c44cdf.jpg';
        let MattA =  'https://mattaertker.github.io/MattAertker/images/MattAertker-f361e9d3.jpg';
        let MattAIphone =  'https://mattaertker.github.io/MattAertker/images/persIphone-209a717b.jpg';
        let MattAIpad =  'https://mattaertker.github.io/MattAertker/images/MattAIpad-16771da4.jpg';
        let NatIphone =  'https://mattaertker.github.io/MattAertker/images/natIphone-7415c3b8.jpg';
        let NatIpad =  'https://mattaertker.github.io/MattAertker/images/NatIpad-703ae5fb.jpg';
        let bugZooIphone =  'https://mattaertker.github.io/MattAertker/images/bugZoo-iphone-a645d5e6.jpg';
        let bugZooIpad =  'https://mattaertker.github.io/MattAertker/images/bugZoo-ipad-933c25a8.jpg';
        let G5Ipad =  'https://mattaertker.github.io/MattAertker/images/G5-ipad-f4f28d71.jpg';
        let MedicareIphone =  'https://mattaertker.github.io/MattAertker/images/MedicareIphone-119cd214.jpg';
        let HotelIphone =  'https://mattaertker.github.io/MattAertker/images/trillo-iphone-aa75860e.jpg';
        let HotelIpad =  'https://mattaertker.github.io/MattAertker/images/trillo-ipad-5047aec1.jpg';

        if (this.state.isPersonal) {
            return (
                <TabContent header="Personal Portfolio"
                    macImage={MattA}
                    iphoneImage={MattAIphone}
                    id="TabContent__Personal"
                    ipadImage={MattAIpad}
                    pers={true}
                    techUsed={"The technologies being used for this project are React and SCSS."}
                    introText={"Some challenges with this project were solidifying my knowledge of SCSS and React while also learning more about how to implement the necessary React or javascript for certain design aspects of the website."}
                    goal={"This project started in January of 2020 with the goal of refining my skills in React for the purpose of designing a website that can showcase the various projects I've completed during my time at Colorado State University."}
                    visit={"https://mattaertker.github.io/MattAertker/"}
                    github={"https://github.com/mattaertker/MattAertker"} />
            )
        }
        if (this.state.isNatours) {
            return (
                <div>
                    <TabContent header="Natours"
                        macImage={Natours}
                        iphoneImage={NatIphone}
                        ipadImage={NatIpad}
                        nat={true}
                        id="TabContent__Natours"
                        goal={"This project began during the Summer of 2019 in order to develop a solid foundation of Advanced CSS in order to expand into more complex languages such as SCSS. This foundation in Advanced CSS also helped as I went about designing my own website."}
                        introText={"The biggest challenge with this project was learning how to calculate em and rem (website width/height measurement units), along with many other intricate details and design tips for future projects."}
                        techUsed={"The technologies used for this project were HTML 5 and CSS."}
                        visit={"https://mattaertker.github.io/Natours/"}
                        github={"https://github.com/mattaertker/Natours"} />
                    {/* {this.animatePage("TabContent__Natours")} */}
                </div>

            )
        }
        if (this.state.isHotel) {
            return (
                <TabContent header="Hotel"
                    macImage={Hotel}
                    iphoneImage={HotelIphone}
                    ipadImage={HotelIpad}
                    hot={true}
                    id="TabContent__Hotel"
                    goal={"This project was started during the Summer of 2019 with the goal of practicing a second form of Advanced SCSS with Flexbox while at the same time furthuring my knowledge of SVG's and animations."}
                    techUsed={"The technologies used for this project were HTML 5 and SCSS."}
                    introText={"The biggest challenge with this project was learning how to manipulate the SVG's and how to make images responsive."}
                    visit={"https://mattaertker.github.io/HotelSite/"}
                    github={"https://github.com/mattaertker/HotelSite"} />
            )
        }
        if (this.state.isMedicare) {
            return (
                <div>
                    <TabContent header="Medicare Reimbursements"
                        macImage={Medicare}
                        iphoneImage={MedicareIphone}
                        ipadImage={G5Ipad}
                        med={true}
                        id="TabContent__Medicare"
                        goal={"This project was completed with 3 other group members in Spring of 2019 and was one of the first big website development projects I've done. The goal of this website was to efficiently perform the calculations for 5000 different hospitals' Medicare Reimbursements."}
                        introText={"The challenges faced for this project were laerning how to connect a database to our project, manipulate images to look good on most devices, and perform some of the algorithms for the calculationss of the reimbursement."}
                        techUsed={"The technologies used for this project were HTML 5, Fuel MVC, Javascript, jQuery, and CSS."}
                        visit={"https://www.cs.colostate.edu/~maertker/ct310/m4/index/project"} />
                    {/* {this.animatePage("TabContent__Medicare")} */}
                </div>
            )
        }
        if (this.state.isBugZoo) {
            return (
                <div>
                    <TabContent header="CSU Bug Zoo"
                        macImage={BugZoo}
                        iphoneImage={bugZooIphone}
                        ipadImage={bugZooIpad}
                        bug={true}
                        id="TabContent__BugZoo"
                        goal={"Although currently in progress, this website will hopefully be used by the CSU Bug Zoo volunteers as a guide to effectively care for the various species of bugs at the Zoo."}
                        introText={"The main challenges I am currently encountering are getting the accommodations for all disabilities within this website to work so it can be used by volunteers for the CSU bug zoo."}
                        techUsed={"The technologies being used for this project are HTML 5 and SCSS."}
                        visit={"https://mattaertker.github.io/BugZooVolunteers/"}
                        github={"https://github.com/mattaertker/BugZooVolunteers"} />
                    {/* {this.animatePage("TabContent__BugZoo")} */}
                </div>
            )
        }
        document.getElementsByClassName("TabContent").style.opacity = 1;
        return null;
    }

    // animatePage(id) {
    //     // setTimeout(() => {
    //         if (document.getElementById(id)) {
    //             console.log("pers")
    //             document.getElementById(id).animate([
    //                 { opacity: 0, transform: 'translateY(5rem)' },
    //                 { opacity: 1, transform: 'translateY(0)' }
    //             ], 2000);
    //         }
    //         else {
    //             console.log("didn't do shit")
    //             return;
    //         }
    //     // },1000);
    // }

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
    displayDiv() {
        if (this.state.isPersonal) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: true,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: false,
                    });
                    document.getElementById("Personal").checked = false;
                    document.getElementById("Natours").checked = true;
                    document.getElementById('TabContent__Natours').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToMedicare();
                }
            }, 5000);
        }
    }

    rotateToMedicare() {
        if (this.state.isNatours) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: true,
                        isBugZoo: false,
                    })
                    document.getElementById("Natours").checked = false;
                    document.getElementById("MedicareReimbursements").checked = true;
                    document.getElementById('TabContent__Medicare').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToHotel();
                }
            }, 5000);
        }
    }

    rotateToHotel() {
        if (this.state.isMedicare) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: true,
                        isMedicare: false,
                        isBugZoo: false,
                    })
                    document.getElementById("MedicareReimbursements").checked = false;
                    document.getElementById("Hotel").checked = true;
                    document.getElementById('TabContent__Hotel').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToBugZoo();
                }
            }, 5000);
        }
    }

    rotateToBugZoo() {
        if (this.state.isHotel) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: true,
                    })
                    document.getElementById("Hotel").checked = false;
                    document.getElementById("CsuBugZoo").checked = true;
                    document.getElementById('TabContent__BugZoo').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToPersonal();
                }
            }, 5000);
        }
    }

    rotateToPersonal() {
        if (this.state.isBugZoo) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: true,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: false,
                    })
                    document.getElementById("CsuBugZoo").checked = false;
                    document.getElementById("Personal").checked = true;
                    document.getElementById('TabContent__Personal').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    // this.displayDiv();
                }
            }, 5000);
        }
    }

}