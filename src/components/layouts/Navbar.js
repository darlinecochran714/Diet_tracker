import React from 'react';
import PropTypes from 'prop-types'

const Navbar = ({title}) =>{
    return (
        <nav className='navbar'>
            <h2>
                {title}
            </h2>
        </nav>
    )
}

Navbar.defaultProps={
    title: 'placeholder navbar'
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Navbar