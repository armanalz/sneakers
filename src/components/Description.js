import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Description extends Component {

    state = {
        
        selected:[1,0,0,0,0]
    }

    render() { 
        return (
            <div className="description">

                <div className="description_header">
                    <h1 className="description_header-title">nike odyssey react</h1>
                    <h2 className="description_header-price">$55.56</h2>
                </div>

                <h4 className="description_collection">running collections</h4>

                <div className="description_icons">

                    <Icon name="icon-star-full" />
                    <Icon name="icon-star-full" />
                    <Icon name="icon-star-full" />
                    <Icon name="icon-star-full" />
                    <Icon name="icon-star-full" fill="gray" />

                </div>

                <h3 className="description_title">description</h3>

                <span className="description_text">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                </span>

                <div className="description_options">

                    <div className="description_options-color">

                        <div className="description_options-text">color</div>

                        <div className="description_options-color-picker">

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[0] ? "border-blue" : null}`}
                                 
                                 onClick={() => this.setState({selected : [1,0,0,0,0]})}
                            >
                               <div className="description_options-color-picker-item circle circle-blue"></div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[1] ? "border-pink" : null}`}
                                 onClick={() => this.setState({selected : [0,1,0,0,0]})}
                            >
                               <div className="description_options-color-picker-item circle circle-pink"></div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[2] ? "border-magenta" : null}`}
                                 onClick={() => this.setState({selected : [0,0,1,0,0]})}
                            >
                               <div className="description_options-color-picker-item circle circle-magenta"></div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[3] ? "border-green" : null}`}
                                 onClick={() => this.setState({selected : [0,0,0,1,0]})}
                            >
                               <div className="description_options-color-picker-item circle circle-green"></div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[4] ? "border-violet" : null}`}
                                 onClick={() => this.setState({selected : [0,0,0,0,1]})}
                            >
                               <div className="description_options-color-picker-item circle circle-violet"></div>
                            </div>

                        </div> {/* description_options-color-picker */}

                    </div> {/* description_options-color */}


                    <div className="description_options-size">

                        <div className="description_options-text">size</div>

                        <select className="description_options-select size">

                            <option value="uk8">(uk 8)</option>
                            <option value="uk9">(uk 9)</option>
                            <option value="uk7">(uk 7)</option>

                        </select>

                    </div>

                    <div className="description_options-qty">

                        <div className="description_options-text">qty</div>

                        <select className="description_options-select qty">

                            <option value="1">(2)</option>
                            <option value="2">(1)</option>
                            <option value="3">(3)</option>

                        </select>

                    </div>

                </div>   {/* description_options */}

                <div className="description_button">
                    <div className="description_button-wrapper">
                        <div className="description_button-btn">
                            <Icon name="icon-cart"/>
                            <h3 className="description_button-btn-title">add to cart</h3>
                        </div>
                    </div>
                    <div className="description_button-share">
                        <Icon name="icon-share2"/>
                    </div>
                </div>

            </div>  /* description */
        );
    }
}

export default Description;