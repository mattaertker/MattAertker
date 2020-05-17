import React, { Component } from 'react'
import { Container } from 'reactstrap';
// import fallOne from './fall1.jpg';
// import fallTwo from './fall2.jpg';
// import fallThree from './fall3.jpg';
// import fallFour from './fall4.jpg';
// import fallFive from './fall5.jpg';
// import fallSix from './fall6.jpg';
// import snowOne from './snow1.jpg';
// import snowTwo from './snow2.jpg';
// import snowThree from './snow3.jpg';
// import snowFour from './snow4.jpg';
// import snowFive from './snow5.jpg';
// import snowSix from './snow6.jpg';
// import forestOne from './forest1.jpg';
// import forestTwo from './forest2.jpg';
// import forestThree from './forest3.jpg';
// import forestFour from './forest4.jpg';
// import forestFive from './forest5.jpg';
// import forestSix from './forest6.jpg';

// import snowOne from 'https://mattaertker.github.io/MattAertker/images/snow1-fedd78ed.jpg';
// import snowTwo from 'https://mattaertker.github.io/MattAertker/images/snow2-58979452.jpg';
// import snowThree from 'https://mattaertker.github.io/MattAertker/images/snow3-0851cfd0.jpg';
// import snowFour from 'https://mattaertker.github.io/MattAertker/images/snow4-64584adf.jpg';
// import snowFive from 'https://mattaertker.github.io/MattAertker/images/snow5-fe78b9c1.jpg';
// import snowSix from 'https://mattaertker.github.io/MattAertker/images/snow6-0c1f47e2.jpg';
// import forestOne from 'https://mattaertker.github.io/MattAertker/images/forest1-1e2b98d3.jpg';
// import forestTwo from 'https://mattaertker.github.io/MattAertker/images/forest2-af7e23a5.jpg';
// import forestThree from 'https://mattaertker.github.io/MattAertker/images/forest3-815e865f.jpg';
// import forestFour from 'https://mattaertker.github.io/MattAertker/images/forest4-c9316ac6.jpg';
// import forestFive from 'https://mattaertker.github.io/MattAertker/images/forest5-a6d84321.jpg';
// import forestSix from 'https://mattaertker.github.io/MattAertker/images/forest6-c576917d.jpg';

export default class ThreeDCube extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        // from least to greatest important images
        //1. // 3
        //2. // 2
        //3. // 4
        //4. // 1
        //5. // 6
        //6. // 5
        return (
            <div>
                {this.getCubeSeason()}
            </div>
            // <Container>
            //         <div className="wrap">
            //             <div className={"cube"}>
            //                 <img src={one} alt="img one"/>
            //                 <img src={two} alt="img two"/>
            //                 <img src={three} alt="img three"/>
            //                 <img src={four} alt="img four"/>
            //                 <img src={five} alt="img five"/>
            //                 <img src={six} alt="img six"/>
            //             </div>
            //         </div>
            // </Container>
        );
    }

    getCubeSeason() {
        switch (this.props.season) {
            case "Fall":
                return this.getFallRender();
            case "Winter":
                return this.getSnowRender();
            case "Forest":
                return this.getForestRender();
        }
    }

    getFallRender() {
        let fallOne = 'https://mattaertker.github.io/MattAertker/images/fall1-1c4b1ce6.jpg';
        let fallTwo = 'https://mattaertker.github.io/MattAertker/images/fall2-eda0af60.jpg';
        let fallThree = 'https://mattaertker.github.io/MattAertker/images/fall3-6af08fa9.jpg';
        let fallFour = 'https://mattaertker.github.io/MattAertker/images/fall4-40625262.jpg';
        let fallFive = 'https://mattaertker.github.io/MattAertker/images/fall5-9a018f37.jpg';
        let fallSix = 'https://mattaertker.github.io/MattAertker/images/fall6-64bf269c.jpg';
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={fallOne} alt="img one" />
                        <img src={fallTwo} alt="img two" />
                        <img src={fallThree} alt="img three" />
                        <img src={fallFour} alt="img four" />
                        <img src={fallFive} alt="img five" />
                        <img src={fallSix} alt="img six" />
                    </div>
                </div>
            </Container>
        );
    }

    getSnowRender() {
        let snowOne = 'https://mattaertker.github.io/MattAertker/images/snow1-fedd78ed.jpg';
        let snowTwo = 'https://mattaertker.github.io/MattAertker/images/snow2-58979452.jpg';
        let snowThree = 'https://mattaertker.github.io/MattAertker/images/snow3-0851cfd0.jpg';
        let snowFour = 'https://mattaertker.github.io/MattAertker/images/snow4-64584adf.jpg';
        let snowFive = 'https://mattaertker.github.io/MattAertker/images/snow5-fe78b9c1.jpg';
        let snowSix = 'https://mattaertker.github.io/MattAertker/images/snow6-0c1f47e2.jpg';
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={snowOne} alt="img one" />
                        <img src={snowTwo} alt="img two" />
                        <img src={snowThree} alt="img three" />
                        <img src={snowFour} alt="img four" />
                        <img src={snowFive} alt="img five" />
                        <img src={snowSix} alt="img six" />
                    </div>
                </div>
            </Container>
        );
    }

    getForestRender() {
        let forestOne = 'https://mattaertker.github.io/MattAertker/images/forest1-1e2b98d3.jpg';
        let forestTwo = 'https://mattaertker.github.io/MattAertker/images/forest2-af7e23a5.jpg';
        let forestThree  =  'https://mattaertker.github.io/MattAertker/images/forest3-815e865f.jpg';
        let forestFour=  'https://mattaertker.github.io/MattAertker/images/forest4-c9316ac6.jpg';
        let forestFive=  'https://mattaertker.github.io/MattAertker/images/forest5-a6d84321.jpg';
        let forestSix = 'https://mattaertker.github.io/MattAertker/images/forest6-c576917d.jpg';
        return (
            <Container>
                <div className="wrap">
                    <div className={"cube"}>
                        <img src={forestOne} alt="img one" />
                        <img src={forestTwo} alt="img two" />
                        <img src={forestThree} alt="img three" />
                        <img src={forestFour} alt="img four" />
                        <img src={forestFive} alt="img five" />
                        <img src={forestSix} alt="img six" />
                    </div>
                </div>
            </Container>
        );
    }
}