import React from 'react';
import styled from 'styled-components';
import {mediaMin, mediaMax} from '../config/mq'
import fb from "../images/icons/social-facebook.svg";
import ig from "../images/icons/social-instagram.svg";
import mail from "../images/icons/social-email.svg";
import {SocialItem} from "../commons/Socials"


const SocialWrapper = styled.div`
  ${mediaMax.small`
    display: none;
  `}
`

const SocialItemSpaced = styled(SocialItem)`
  margin: 0 4px; 
`
//perche non funziona????


const Socials = ()=> {
  return (
    <SocialWrapper>
     <SocialItem iconUrl={fb} href="#" />
     <SocialItem iconUrl={ig} href="#"/>
     <SocialItem iconUrl={mail} href="#"/>
    </SocialWrapper>
  );
}

export default Socials;
