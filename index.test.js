import React from 'react';
import StyledTemplate from './src';
import renderer from 'react-test-renderer';

test('Render Template component', () => {
    const component = renderer.create(
        <StyledTemplate></StyledTemplate>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
