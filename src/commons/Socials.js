import React from 'react';
import styled from 'styled-components';


const SocialLink = styled.a`
  display: inline-block;
  padding: 8px;
  margin: 0 4px;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 40px;
  transition: border .3s;
  border: 1px solid transparent;
  &:hover {
    border-color: var(--primary-color)
  }
`

export const SocialItem = (props)=> {
  return (
    <SocialLink href={props.href}>
      <img  width="16" height="16" src={props.iconUrl} />
    </SocialLink>
  )
}

