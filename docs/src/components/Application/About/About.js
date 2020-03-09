import React, {Component} from 'react';
import {Container, CardText, Card, CardHeader, CardImg} from 'reactstrap';
import MattImg from './user.jpg';

let people = [
    {bio: "Hello, my name is Matt Aertker. I am pursuing a bachelors degree in applied computing " +
            "technologies with a concentration in computing technology. I am also pursuing a minors in " +
            "business administration. I love web development, software development, and problem solving. In my " +
            "spare time, I love to snowboard and teach myself new things!"}
];

export default class About extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Container id="About" className="About">
                        <div className="About--Container">
                            <div className="About__cards">
                                <Card key="matt's card" body outline className="About__cards-container">
                                    <div className="About__cards-text">
                                        <CardHeader tag="h5" className='About__cards-header'>Matt Aertker</CardHeader>
                                        <CardImg top className="About__cards-img" src={MattImg} alt="Card image cap" />
                                        <br></br>
                                        <CardText className="About__cards-text-Bio">{people[0].bio}</CardText>
                                    </div>
                                </Card>
                            </div>
                        </div>
            </Container>

        );
    }
}
