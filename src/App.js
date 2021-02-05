import React from "react"
import "fullpage.js/vendors/scrolloverflow" // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage"

import './bg.css'
import './glitch.css'

import logo1 from './assets/DEATH IN THE VOID.png'
import logo2 from './assets/SCI-FI HORROR.png'

class App extends React.Component {

    state = {
        current: 0
    }

    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index)
        this.setState({
            current: origin.index
        })
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index)
        this.setState({
            current: destination.index
        })
    }
    render() {
        return (
            <>
                <h1 style={{
                    position: 'absolute',
                    zIndex: 10
                }}>
                    {this.state.current}
                </h1>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            <ReactFullpage
                scrollOverflow={true}
                //sectionsColor={["orange", "purple", "green"]}
                onLeave={this.onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                render={({ state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">

                            <div className="section">


                                    <h3 className="glitch menu1"
                                        style={{cursor: 'pointer'}}
                                        data-glitch="Explore"
                                        onClick={() => fullpageApi.moveTo(2, 0)}>
                                        Explore
                                    </h3>

                                    <h3 className="glitch menu2"
                                        style={{cursor: 'pointer'}}
                                        data-glitch="About Us"
                                        onClick={() => fullpageApi.moveTo(3, 0)}>
                                        About Us
                                    </h3>


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 20

                                }}>
                                    <img src={logo1} alt="Death in the Void"/>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 20
                                }}>
                                    <img src={logo2} alt="Sci-fi horror"/>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 20
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#c1ffc7"
                                         className="bi bi-chevron-double-down" viewBox="0 0 16 16"
                                         style={{cursor: 'pointer'}}
                                         onClick={() => fullpageApi.moveTo(2, 0)}
                                    >
                                        <path fillRule="evenodd"
                                              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                        <path fillRule="evenodd"
                                              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div>



                            </div>

                            <div className="section">

                                <div className="slide">
                                    <h3>Slide 2.1</h3>
                                </div>
                                <div className="slide">
                                    <h3>Slide 2.2</h3>
                                </div>
                                <div className="slide">
                                    <h3>Slide 2.3</h3>
                                </div>

                            </div>

                            <div className="section">

                                <h3>Section 3</h3>

                                {/*<a href="#" className="glitch" data-glitch="Explore" onClick={() => fullpageApi.moveTo(1, 0)}>Explore</a>*/}
                            </div>
                        </div>
                    );
                }}
            />
            </>
        );
    }
}



export default App
