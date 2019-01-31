import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumbs } from '..';

describe('<Breadcrumbs /> component', () => {
  const wrapper = shallow(<Breadcrumbs />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
