import React, { Component } from 'react';
import DropdownList from './DropdownList';

class Dropdown extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Option 1',
        selected: false,
        key: 'group'
      },
      {
        id: 2,
        title: 'Option 2',
        selected: false,
        key: 'group'
      },
      {
        id: 3,
        title: 'Option 3',
        selected: false,
        key: 'group'
      },
      {
        id: 4,
        title: 'Option 4',
        selected: false,
        key: 'group'
      },
      {
        id: 5,
        title: 'Option 5',
        selected: false,
        key: 'group'
      }
    ]
  };

  resetThenSet = (id) => {
    const { data } = this.state;
    const newState = [...data];
    // eslint-disable-next-line no-param-reassign
    newState.map(item => (item.selected = item.id === id));
    this.setState({
      data: newState
    });
  };

  render() {
    const { data } = this.state;
    return <DropdownList title="Select an option" list={data} resetThenSet={this.resetThenSet} />;
  }
}

export default Dropdown;
