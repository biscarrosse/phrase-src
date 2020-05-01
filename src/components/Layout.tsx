// React:
import React from 'react';
// Redux:
// import { useSelector } from 'react-redux';
// import { AppState } from '../store/store';
// Components:

// style:
import { Wrap, Container } from './styles/common.style';

const Layout: React.FC = ({ children }) => {
  // const { convertedValue } = useSelector((state: AppState) => state.conversion);
  return (
    <Wrap className="wrap watch?v=dQw4w9WgXcQ">
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Layout;
