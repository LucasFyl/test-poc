import React from 'react';
import Template from './src';
import renderer from 'react-test-renderer';
import {StyleSheetTestUtils} from 'aphrodite';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());

test('Render Template component active', () => {
    const component = renderer.create(
        <Template active={true} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Render Template component not active', () => {
    const component = renderer.create(
        <Template active={false} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());
