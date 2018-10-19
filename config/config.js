import { configure } from '@storybook/react';
import '../styles/styles.css';

// automatically import from "components" folder all files ending in *.story.js
const req = require.context('../components', true, /.story.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
