import * as React from 'react';
import {Loading} from './Loading';
import {newStory} from '../../../.storybook/utils';

export default {
    title: 'Components/Loading',
    component: Loading,
};

export const Custom = newStory({
    Component: Loading,
    args: {visible: true}
});

export const Xs = () => <Loading visible size="xs" />;
export const Lg = () => <Loading visible  size="lg" />;
export const Overlay = () => (
    <div>
        Content
        <Loading size="lg" visible overlay />
    </div>
);