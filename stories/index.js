import React from 'react';
import {storiesOf} from '@kadira/storybook';
import App from '../src/App.js';

storiesOf('Upload Pdf', module)
    .addWithInfo('', `Component description`, () =>
        <App />,
    {inline: true});
