import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Header';
import { HeaderWrapper } from '../SharedStyles';

describe('<Header /> component', () => {
  const props = {
    children: 'test children'
  };

  const wrapper = shallow(<Header {...props} />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with the correct className', () => {
    expect(wrapper.find(HeaderWrapper).hasClass('header')).toBe(true);
  });

  it('should render with children', () => {
    expect(wrapper.children().exists()).toBe(true);
  });
});
