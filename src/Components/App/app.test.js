import { shallow } from 'enzyme';
import React from 'react';
import { App } from './app';

/*global describe, it, expect*/

describe('App component', () => {
    it('should render App component', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
