import React from 'react';
import {storiesOf} from '@kadira/storybook';
import UploadPdf from '../src/UploadPdf.js';

storiesOf('Upload Pdf', module)
    .addWithInfo('', `Component description`, () =>
        <UploadPdf />,
    {inline: true});
