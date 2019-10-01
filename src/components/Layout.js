import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Layout extends Component {

    state = {
        
        selected:[1,0,0,0,0],
        color:"blue",
        startX: null,
        endX: null,
        i: 1

    }

    selectorHandler = (e) => {

        switch (e.target.id) {

            case "blue":
                this.setState({selected: [1,0,0,0,0],color: "blue"})
              break;
            case "magenta":
                this.setState({selected: [0,0,1,0,0],color: "magenta"})
              break;
            case "pink":
                this.setState({selected: [0,1,0,0,0],color: "pink"})
              break;
            case "green":
                this.setState({selected: [0,0,0,1,0],color: "green"})
              break;
            case "violet":
                this.setState({selected: [0,0,0,0,1],color: "violet"})
              break;
            default:
                                   
        }

    }

    carouselHandler = (e) => {

        switch (e.target.id) {

            case "1":
                this.setState({i: 1})
              break;
            case "2":
                    this.setState({i: 2})
              break;
            case "3":
                    this.setState({i: 3})
              break;
            case "4":
                    this.setState({i: 4})
              break;
            default:
                
        }

    }

    touchStartHandler = (e) => {

        let touch = e.touches[0]
        let clientStart = touch.clientX
        this.setState({startX : clientStart })
        
    }

    touchEndHandler = (e) => {

        let changed = e.changedTouches[0];
        let clientEnd = changed.clientX
        let x1 = this.state.startX
        let x2 = clientEnd
       
            if(x1-x2 > 100 && this.state.i < 4) {

                this.setState({ i: this.state.i+1, endX: null, startX: null })
    
            }else if(x1-x2 > 100 && this.state.i >= 4) {
    
                this.setState({ i: 1, endX: null, startX: null })
    
            }else if(x1-x2 < -100 && this.state.i > 1) {
    
                this.setState({ i: this.state.i-1, endX: null, startX: null })
    
            }else if(x1-x2 < -100 && this.state.i <= 1) {
    
                this.setState({ i: 4, endX: null, startX: null })
    
            }else {
    
                this.setState({ endX: null, startX: null })

            }
        
    }

    render() { 

        let bgIMG = require(`../resources/img/${this.state.color}${this.state.i}.png`)
        let bgColor = this.state.color
        
        return (

        <div className="layout_wrapper">

            <div className="description">

                <div className="description_header">
                    <h1 className="description_header-title">nike odyssey react</h1>
                    <h2 className={`description_header-price ${bgColor}`}>$55.56</h2>
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
                            >
                               <div className="description_options-color-picker-item circle circle-blue"
                                    id="blue" onClick={(e) => this.selectorHandler(e)}
                               >
                               </div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[1] ? "border-pink" : null}`}    
                            >
                               <div className="description_options-color-picker-item circle circle-pink"
                                    id="pink" onClick={(e) => this.selectorHandler(e)}
                               >
                               </div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[2] ? "border-magenta" : null}`}    
                            >
                               <div className="description_options-color-picker-item circle circle-magenta"
                                    id="magenta" onClick={(e) => this.selectorHandler(e)}
                               >
                               </div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[3] ? "border-green" : null}`}                                
                            >
                               <div className="description_options-color-picker-item circle circle-green"
                                    id="green" onClick={(e) => this.selectorHandler(e)}
                               >     
                               </div>
                            </div>

                            <div className={`description_options-color-picker-item border
                                             ${this.state.selected[4] ? "border-violet" : null}`}                               
                            >
                               <div className="description_options-color-picker-item circle circle-violet"
                                    id="violet" onClick={(e) => this.selectorHandler(e)}
                               >
                               </div>
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

            </div>  {/* description */}

            <div className="carousel"> 

               <div className="carousel_logo"></div>

               <div className="carousel_slider"
                    onTouchStart={(e) => this.touchStartHandler(e)}
                    onTouchEnd={(e) => this.touchEndHandler(e)}
               >
                   <div className={`carousel_slide ${bgColor}${this.state.i} ${bgColor}`}
                        style={{backgroundImage:`url(${bgIMG})`}}           
                    >
                    </div>
               </div>

                <div className="carousel_controler">
                    <div className={`carousel_controler-dot ${this.state.i === 1 ? "active" : ""}`}
                         id="1"
                         onClick={(e) => this.carouselHandler(e) } 
                    >
                    </div>
                    <div className={`carousel_controler-dot ${this.state.i === 2 ? "active" : ""}`}
                         id="2"
                         onClick={(e) => this.carouselHandler(e) } 
                    >
                    </div>
                    <div className={`carousel_controler-dot ${this.state.i === 3 ? "active" : ""}`}
                         id="3"
                         onClick={(e) => this.carouselHandler(e) } 
                    >
                    </div>
                    <div className={`carousel_controler-dot ${this.state.i === 4 ? "active" : ""}`}
                         id="4"
                         onClick={(e) => this.carouselHandler(e) } 
                    >
                    </div>
                </div>

            </div>
            
        </div> /* layout_wrapper */

        );
    }
}

export default Layout;