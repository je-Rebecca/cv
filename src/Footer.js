import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Background>
      <p className="style">© 2021 Resume. All Rights Reserved </p>
    </Background>
  );
};

const Background = styled.div`
  background-color: #f9dfe2;
  .style {
    margin: 0;
    padding: 2rem;
  }
`;

export default Footer;
