import React from 'react'
import styled from 'styled-components'

const HaburgerWrapper = styled.button`
  padding: 15px 15px;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
`

const HamburgerBox = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; 
`
const HamburgerInner = styled.div`
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  top: 2px;
  transition-property: transform;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); 
  &:before, &:after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition: transform .15s ease;
    content: "";
    display: block;
  }
  &:before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }
  &:after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`


const Hamburger = () => {
  return (
    <HaburgerWrapper>
      <HamburgerBox>
        <HamburgerInner />
      </HamburgerBox>
    </HaburgerWrapper>
  )
}

export default Hamburger;