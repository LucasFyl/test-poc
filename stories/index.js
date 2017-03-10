import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TemplateComponent from '../src';

storiesOf('Template Component', module)
    .add('prop', () => <TemplateComponent />)
