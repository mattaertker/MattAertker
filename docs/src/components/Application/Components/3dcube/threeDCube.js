import React,{Component} from 'react'
import {Container} from 'reactstrap';
import fallOne from './fall1.jpg';
import fallTwo from './fall2.jpg';
import fallThree from './fall3.jpg';
import fallFour from './fall4.jpg';
import fallFive from './fall5.jpg';
import fallSix from './fall6.jpg';
import snowOne from './snow1.jpg';
import snowTwo from './snow2.jpg';
import snowThree from './snow3.jpg';
import snowFour from './snow4.jpg';
import snowFive from './snow5.jpg';
import snowSix from './snow6.jpg';
import forestOne from './forest1.jpg';
import forestTwo from './forest2.jpg';
import forestThree from './forest3.jpg';
import forestFour from './forest4.jpg';
import forestFive from './forest5.jpg';
import forestSix from './forest6.jpg';

export default class ThreeDCube extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                {this.getCubeSeason()}
            </div>
        );
    }

    getCubeSeason() {
        switch(this.props.season){
            case "Fall":
                return this.getFallRender();
            case "Winter":
                return this.getSnowRender();
            case "Forest":
                return this.getForestRender();
        }
    }

    getFallRender() {
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={fallOne} alt="img one"/>
                        <img src={fallTwo} alt="img two"/>
                        <img src={fallThree} alt="img three"/>
                        <img src={fallFour} alt="img four"/>
                        <img src={fallFive} alt="img five"/>
                        <img src={fallSix} alt="img six"/>
                    </div>
                </div>
            </Container>
        );
    }

    getSnowRender() {
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={snowOne} alt="img one"/>
                        <img src={snowTwo} alt="img two"/>
                        <img src={snowThree} alt="img three"/>
                        <img src={snowFour} alt="img four"/>
                        <img src={snowFive} alt="img five"/>
                        <img src={snowSix} alt="img six"/>
                    </div>
                </div>
            </Container>
        );
    }

    getForestRender() {
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={forestOne} alt="img one"/>
                        <img src={forestTwo} alt="img two"/>
                        <img src={forestThree} alt="img three"/>
                        <img src={forestFour} alt="img four"/>
                        <img src={forestFive} alt="img five"/>
                        <img src={forestSix} alt="img six"/>
                    </div>
                </div>
            </Container>
        );
    }
}