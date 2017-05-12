import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Button from '../src';

storiesOf('Button', module)
    .addWithInfo('Primary', `Component description`,  () => <Button>{'Hello'}</Button>, {inline: true})
    .addWithInfo('Secondary', `Component description`,  () => <Button secondary={true}>{'Hello'}</Button>, {inline: true})
    .addWithInfo('Secondary Disabled', `Component description`,  () => <Button secondary={true} disabled={true}>{'Hello'}</Button>, {inline: true})
    .addWithInfo('Primary Disabled', `Component description`,  () => <Button disabled={true}>{'Hello'}</Button>, {inline: true})
    .addWithInfo('Outline', `Component description`,  () => <Button outline={true}>{'Hello'}</Button>, {inline: true});


