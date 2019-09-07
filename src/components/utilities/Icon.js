import React from 'react';
import SVG from '../../resources/img/sprite.svg';

const Icon = (props) => {
    return (
        <svg className={`${props.name}`}>
		   <use xlinkHref={`${SVG}#${props.name}`} />
	    </svg>
    );
};

export default Icon;