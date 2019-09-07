import React, { Component } from 'react';
import Icon from './utilities/Icon';
import '../../resources/img/sprite.svg';

class Description extends Component {
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
                </div>
            </div>
        );
    }
}

export default Description;