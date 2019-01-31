import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '..';
import { FooterWrapper } from '../../SharedStyles';

describe('<Footer /> component', () => {
  const wrapper = shallow(<Footer />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with the correct className', () => {
    expect(wrapper.find(FooterWrapper).hasClass('footer')).toBe(true);
  });
});
