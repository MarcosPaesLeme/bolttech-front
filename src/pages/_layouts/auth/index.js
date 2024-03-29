import React from 'react';
import P from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content> {children} </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: P.element.isRequired,
};
