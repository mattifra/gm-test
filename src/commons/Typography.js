import React from 'react';
import styled from 'styled-components';
import {mediaMin, mediaMax} from '../config/mq'


export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};



export const SectionTitle = styled.h2`
   font-weight: bold;
   text-transform: uppercase;
   color: var(--primary-color);
   margin-bottom: 18px;
   ${mediaMin.small`
      font-size: ${setRem(30)};
   `}
`


export const Title = styled.h3 `
   font-size: ${setRem(16)};
   font-weight: normal;
   ${mediaMin.small`
      font-size: ${setRem(22)};
   `}
`;


export const TitleBig= styled(Title)`
   font-weight: bold;
   color: white;
   font-size: ${setRem(24)};
   ${mediaMin.small`
      font-size: ${setRem(34)};
   `}
`;


export const TitleArticle = (props) => (
   <Title>
      <a href={props.href}>
      {props.text}
      </a>
   </Title>
 );

 export const TitleArticleBig = (props) => (
   <TitleBig>
      <a href={props.href}>
      {props.text}
      </a>
   </TitleBig>
 );

