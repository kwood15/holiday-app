import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '..';

describe('<Main /> component', () => {
  const wrapper = shallow(<Main />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with the correct className', () => {
    expect(wrapper.hasClass('main-content')).toBe(true);
  });
});
