import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Button({ color, size, onClick, disabled, children }) {
    const styles = {
        color,
        fontSize: Button.sizes[size],
    };

    return (
        <button className="button" style={styles} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
Button.defaultProps = {
    color: '#333',
    size: 'normal',
    onClick: event => {
        console.log('You have clicked me!', event.target);
    },
};
Button.sizes = {
    small: '10px',
    normal: '14px',
    large: '18px',
};
