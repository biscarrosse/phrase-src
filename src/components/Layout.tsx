// React:
import React from 'react';
// Redux:
// import { useSelector } from 'react-redux';
// import { AppState } from '../store/store';
// Components:
import Navbar from './navbar/Navbar';
import Toast from './toast/Toast';
// style:
import { Wrap, Container } from './styles/common.style';

const Layout: React.FC = ({ children }) => {
  // const { convertedValue } = useSelector((state: AppState) => state.conversion);
  return (
    <Wrap className="wrap watch?v=dQw4w9WgXcQ">
      <Navbar />
      <Toast />
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Layout;
