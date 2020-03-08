import React from 'react';
import Navigation from '../modules/Nav';
import {Container} from '../commons/Container'
import styled from 'styled-components';
import Hamburger from "../commons/Hamburger"
import {mediaMin} from '../config/mq'
import SocialsNav from '../modules/SocialsNav'



const Header = styled.header``;

const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
const Logo = styled.a`  
  width: 180px;
  ${mediaMin.small`
    width: 290px;
  `}
`;


const PageHeader = (props)=> {
  return (
    <Header>
      <ContainerHeader>
        <Logo href="/">
          <img src={props.logo} alt="Greenmatters" />
        </Logo>
        <Navigation />
        <SocialsNav />
        <Hamburger />
      </ContainerHeader>
    </Header>
  );
}

export default PageHeader;


