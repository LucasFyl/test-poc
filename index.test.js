import React from 'react';
import StyledTemplate from './src';
import renderer from 'react-test-renderer';

test('Render Template component active', () => {
    const component = renderer.create(
        <StyledTemplate active={true}></StyledTemplate>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Render Template component not active', () => {
    const component = renderer.create(
        <StyledTemplate active={false}></StyledTemplate>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
