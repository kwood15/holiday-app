import React from 'react';
import { ContainerWrapper } from './SharedStyles';

const Container = props => (
  <ContainerWrapper {...props} mx="auto" px={4} />
);

Container.defaultProps = {
  mx: 'auto'
};

export default Container;
