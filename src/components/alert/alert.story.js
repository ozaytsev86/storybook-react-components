import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './alert';
import { EVENT_ERROR, EVENT_SUCCESS, EVENT_WARNING, EVENT_INFO } from '../../constants/events';
import {
    ERROR_GENERIC_MESSAGE,
    INFO_GENERIC_MESSAGE,
    SUCCESS_GENERIC_MESSAGE,
    WARNING_GENERIC_MESSAGE,
} from '../../constants/messages';
import { pubSubService } from '../../services';

const showAlert = (type, message) => {
    pubSubService.publish(type, message);
};

const alert = (type, message) => {
    return (
        <Fragment>
            <Alert />
            <button onClick={() => showAlert(type, message)}>Show alert</button>
        </Fragment>
    );
};

storiesOf('Alert', module)
    .add('success', () => alert(EVENT_SUCCESS, SUCCESS_GENERIC_MESSAGE))
    .add('error', () => alert(EVENT_ERROR, ERROR_GENERIC_MESSAGE))
    .add('info', () => alert(EVENT_INFO, INFO_GENERIC_MESSAGE))
    .add('warning', () => alert(EVENT_WARNING, WARNING_GENERIC_MESSAGE));
