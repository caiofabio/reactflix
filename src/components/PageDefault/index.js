/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */

import styled, { css } from 'styled-components';
import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

// destructuring, tambem seria valido.
function PageDefault({ children, paddingAll }) {
  return (
    <React.Fragment>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  );
}

export default PageDefault;
