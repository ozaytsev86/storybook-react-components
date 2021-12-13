import * as React from 'react';
import {newStory} from '../../../.storybook/utils';
import {Card} from './Card';

export default {
    title: 'Components/Card',
    component: Card,
};

export const Custom = newStory({
    Component: Card,
    args: {children: 'Children'}
});

export const Title = () => (
    <Card title="Title" />
);

export const Children = () => (
    <Card title="Title" className="u-color--primary">
        Children
    </Card>
);