import React from 'react';
import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.png";
import img4 from "../assets/4.jpg";

const Section2Sliders = () => (
    <div className="section">
        <div className="slide">
            <div className="container" style={{flexDirection: 'column'}}>
                <div className="imgContainer">
                    <img className="Img" src={img1} alt="img"/>
                </div>

                <div>
                    <h3 className="neon">ABOUT THE GAME</h3>
                </div>
                <div>
                    <p style={{maxWidth: 500}}>
                        Do you like Lovecraft? Do you like Alien?
                        We make hard-boiled cRPG, witch combines the horrors of Lovecraft with
                        the atmosphere of the Alien. It's sci-fi horror game,
                        in which you have to fight both with alien creatures,
                        and with your own madness.
                    </p>
                </div>

            </div>
        </div>
        <div className="slide">
            <div className="container" style={{flexDirection: 'column'}}>
                <div className="imgContainer">
                    <img className="Img" src={img2} alt="img"/>
                </div>

                <div>
                    <h3 className="neon">ABSOLUTE HORROR</h3>
                </div>
                <div>
                    <p style={{maxWidth: 500}}>
                        Explore a dying space station whose crew is slowly heading towards madness.
                        Face a terrifying infection that turns people into monsters.
                        Find a cure ... or just burn everything in a nuclear flame.
                    </p>
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="container" style={{flexDirection: 'column'}}>
                <div className="imgContainer">
                    <img className="Img" src={img3} alt="img"/>
                </div>

                <div>
                    <h3 className="neon">ABSOLUTE ROLEPLAY</h3>
                </div>
                <div>
                    <p style={{maxWidth: 500}}>
                        Be whoever you want. Test character and beliefs in monstrous trials. Remain human or turn
                        into a monster.
                    </p>
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="container" style={{flexDirection: 'column'}}>
                <div className="imgContainer">
                    <img className="Img" src={img4} alt="img"/>
                </div>

                <div>
                    <h3 className="neon">ADULT THEMES</h3>
                </div>
                <div>
                    <p style={{maxWidth: 500}}>
                        Sex, violence, drugs - no more taboo topics, everything is extremely tough and realistic.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Section2Sliders;