import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TemplateComponent from '../src';

storiesOf('Template', module)
    .addWithInfo('active', `Component description`,  () => <TemplateComponent active={true}/>, {inline: true})
    .addWithInfo('not active', `Component description`,  () => <TemplateComponent active={false}/>, {inline: true});


