import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ScrollIndicator = ({ position, color, backgroundColor }) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const positionStyle = position === 'right' ? { right: '10px' } : { left: '10px' };

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            ...positionStyle,
            transform: 'translateY(-50%)',
            backgroundColor,
            color,
            padding: '5px 10px',
            borderRadius: '5px',
            zIndex: 1000,
        }}>
            {Math.round(scrollPercentage)}%
        </div>
    );
};

// Define prop types
ScrollIndicator.propTypes = {
    position: PropTypes.oneOf(['right', 'left']),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
};

// Define default props
ScrollIndicator.defaultProps = {
    position: 'right',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
};

export default ScrollIndicator;
