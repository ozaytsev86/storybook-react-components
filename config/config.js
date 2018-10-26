import { configure } from '@storybook/react';
import '../src/styles/styles.css';

// automatically import from "components" folder all files ending in *.story.js
const req = require.context('../src/components', true, /.story.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
