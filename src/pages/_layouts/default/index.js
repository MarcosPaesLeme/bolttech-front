import React from 'react';
import P from 'prop-types';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: P.node.isRequired,
};
