import React from 'react';
import styled from 'styled-components';
import {mediaMin, mediaMax} from '../config/mq'
import {LinkBase} from '../commons/Links'


const Nav = styled.nav`
  display: flex;
  ${mediaMax.small`
    display: none;
  `}
`

const NavItem = styled(LinkBase)`
  font-size: 13px;
  text-transform: uppercase;
  margin: 0 8px;
  font-family: 'Poppins', sans-serif;
`
const Navigation = ()=> {
  return (
    <Nav>
     <NavItem href="#">News</NavItem>
     <NavItem href="#">Renewables</NavItem>
     <NavItem href="#">Living</NavItem>
     <NavItem href="#">Community</NavItem>
    </Nav>
  );
}

export default Navigation;
