import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EVENT_ERROR, EVENT_SUCCESS, EVENT_WARNING, EVENT_INFO } from '../../constants/events';
import { ERROR, SUCCESS, WARNING, INFO } from '../../constants/constants';
import { Close_Alert } from '../../constants/copies';
import './alert.css';
import { pubSubService } from '../../services';

export default class Alert extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['', 'error', 'info', 'success', 'warning']),
        message: PropTypes.string,
        hideCloseButton: PropTypes.bool,
        show: PropTypes.bool,
        timeout: PropTypes.number,
    };

    state = {
        message: '',
        type: '',
        show: false,
        timeout: 5000,
    };

    componentDidMount() {
        this.success = pubSubService.subscribe(EVENT_SUCCESS, message => {
            this.setState(() => ({
                show: true,
                type: SUCCESS,
                message,
            }));

            setTimeout(this.handleClose, this.state.timeout);
        });

        this.error = pubSubService.subscribe(EVENT_ERROR, message => {
            this.setState(() => ({
                show: true,
                type: ERROR,
                message,
            }));

            setTimeout(this.handleClose, this.state.timeout);
        });

        this.info = pubSubService.subscribe(EVENT_INFO, message => {
            this.setState(() => ({
                show: true,
                type: INFO,
                message,
            }));

            setTimeout(this.handleClose, this.state.timeout);
        });

        this.warning = pubSubService.subscribe(EVENT_WARNING, message => {
            this.setState(() => ({
                show: true,
                type: WARNING,
                message,
            }));

            setTimeout(this.handleClose, this.state.timeout);
        });
    }

    componentWillUnmount() {
        this.success.remove();
        this.error.remove();
        this.info.remove();
        this.warning.remove();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show,
            type: nextProps.type,
            text: nextProps.text,
        });

        if (nextProps.show) {
            setTimeout(this.handleClose, this.state.timeout);
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    render() {
        const { message, show, type } = this.state;

        return (
            <p
                className={`
                    c-alert
                    c-alert--${type}
                    ${show ? 'c-alert--slide-in' : 'c-alert--slide-out'}
                `}
            >
                {message}
                <button type="button" className="c-alert__close" onClick={() => this.handleClose()}>
                    <span className="u-visually-hidden">{Close_Alert}</span>
                </button>
            </p>
        );
    }
}
