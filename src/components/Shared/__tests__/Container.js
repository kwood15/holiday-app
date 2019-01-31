import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container /> component', () => {
  const wrapper = shallow(<Container />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
