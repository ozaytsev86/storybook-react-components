import * as React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const propTypes = {
    testId: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

const defaultProps = {
    testId: 'component',
    title: '',
    className: '',
    children: null,
};

export const Card = ({
                         testId,
                         title,
                         className,
                         children,
                     }) => {
    return (
        <div data-testid={`${testId}-card`}
             className={`c-card ${className}`}>
            {title && <h3 data-testid={`${testId}-card-title`} className="c-card-title">{title}</h3>}
            {children && <div className="c-card-body">{children}</div>}
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;