import React from "react"
import "fullpage.js/vendors/scrolloverflow" // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage"

import "./styles.css"
import './bg.css'
import './glitch.css'

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
                                <div>
                                    <a href="#" className="glitch" data-glitch="Explore" onClick={() => fullpageApi.moveTo(1, 0)}>Explore</a>
                                </div>
                                <h3>Section 1</h3>
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
