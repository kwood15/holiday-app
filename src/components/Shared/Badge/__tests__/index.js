import React from 'react';
import { shallow } from 'enzyme';
import Badge from '..';

describe('<Badge /> component', () => {
  const props = {
    children: 'Test'
  };

  let wrapper = shallow(<Badge {...props} />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with the correct className', () => {
    expect(wrapper.hasClass('badge')).toBe(true);
  });

  it('should render with an additional className', () => {
    wrapper = shallow(<Badge className="badge badge--modifier" {...props} />);
    expect(wrapper.hasClass('badge badge--modifier')).toBe(true);
  });

  it('should render with children', () => {
    expect(wrapper.prop('children')).toEqual('Test');
  });
});
