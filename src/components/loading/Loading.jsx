import * as React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

const propTypes = {
    testId: PropTypes.string,
    overlay: PropTypes.bool,
    /** Can be `xs` `lg` */
    size: PropTypes.string,
    className: PropTypes.string,
    visible: PropTypes.bool.isRequired,
};

const defaultProps = {
    testId: 'component',
    overlay: false,
    size: 'sm',
    className: '',
};

export const Loading = ({
                            testId,
                            overlay,
                            className,
                            size,
                            visible,
                        }) => {

    let getClasses = () => {
        let classes = 'c-loading';

        if(overlay) classes+=' c-loading--overlay';
        return classes;
    };


    return visible ? (
        <div data-testid={`${testId}-loading`} className={`${getClasses()} ${className}`}>
            <span className={'c-loading-spinner c-loading-spinner--' + size} />
        </div>
    ) : null;
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;