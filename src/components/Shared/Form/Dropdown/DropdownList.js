import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropdownWrapper } from './DropdownStyles';

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: this.props.title,
      isOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (e) => {
    if (this.dropdownNode && this.dropdownNode.contains(e.target)) return;
    this.closeList();
  };

  closeList = () => {
    this.setState({
      isOpen: false
    });
  };

  toggleList() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  selectItem(title, id, stateKey) {
    const { resetThenSet } = this.props;
    this.setState({
      headerTitle: title,
      isOpen: false,
    }, resetThenSet(id, stateKey));
  }

  render() {
    const { list } = this.props;
    const { isOpen, headerTitle } = this.state;

    return (
      <DropdownWrapper ref={node => (this.dropdownNode = node)}>
        <div className="dropdown">
          <div
            role="link"
            className="dropdown-header"
            onClick={() => this.toggleList()}
            onKeyPress={() => this.toggleList()}
            tabIndex={0}
          >
            <div className="dropdown-header__title">{headerTitle}</div>
            {isOpen ? (
              <FontAwesomeIcon icon="angle-up" size="lg" color="#0ea7b5" />
            ) : (
              <FontAwesomeIcon icon="angle-down" size="lg" color="#0ea7b5" />
            )}
          </div>
          {isOpen && (
            <ul className="dropdown-list">
              {list.map(({
                id,
                title,
                key,
                selected
              }) => (
                <li key={id} className="dropdown-list__item">
                  <div
                    role="button"
                    className="dropdown-list__item--focus"
                    onClick={() => this.selectItem(title, id, key)}
                    onKeyPress={() => this.selectItem(title, id, key)}
                    tabIndex={0}
                  >
                    {title}
                    {' '}
                    {selected && <FontAwesomeIcon icon="check" color="#ffffff" />}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DropdownWrapper>
    );
  }
}

DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  resetThenSet: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DropdownList;
