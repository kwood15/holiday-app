import React from 'react';
import { shallow } from 'enzyme';
import Modal from '..';
import { ModalBody } from '../ModalStyles';

describe('<Modal /> component', () => {
  const props = {
    modalRef: () => {},
    buttonRef: () => {},
    children: 'test children',
    openModal: true,
    handleClose: () => {},
    handleOutsideClick: () => {}
  };

  const handleCloseMock = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  const wrapper = shallow(<Modal {...props} handleClose={handleCloseMock} />);

  it('should render the component with the correct className', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.hasClass('u-visible')).toBe(true);
  });

  it('should add a `keydown` event listener to the document when the component has mounted', () => {
    const event = {};
    document.addEventListener = jest.fn();

    wrapper.instance().componentDidMount();
    expect(document.addEventListener).toHaveBeenCalled();
    wrapper.instance().handleKeyDown(event);
  });

  it('should render with children', () => {
    expect(wrapper.find(ModalBody).children()).toHaveLength(2);
    expect(
      wrapper
        .find(ModalBody)
        .childAt(0)
        .text()
    ).toEqual('close');
    expect(
      wrapper
        .find(ModalBody)
        .childAt(1)
        .text()
    ).toEqual('test children');
  });

  it('should close the modal when the escape key is pressed and apply the correct class', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 27 });
    document.dispatchEvent(event);
    expect(handleCloseMock).toHaveBeenCalledTimes(1);
    wrapper.setProps({ openModal: false });
    expect(wrapper.hasClass('u-hidden')).toBe(true);
  });

  it('should close the modal when the close modal button is clicked and apply the correct class', () => {
    wrapper.find('.modal__close').simulate('click');
    expect(handleCloseMock).toHaveBeenCalledTimes(1);
    expect(wrapper.hasClass('u-hidden')).toBe(true);
  });

  it('should remove a `keydown` event listener from the document when the component unmounts', () => {
    document.removeEventListener = jest.fn();

    wrapper.instance().componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalled();
  });
});
