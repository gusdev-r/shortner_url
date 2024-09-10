import React from 'react'
import {
  Button,
  ContainerButtons,
  ContainerElements,
  Element,
  HeaderComp,
  Logo,
  LogoBox,
} from './style'

export const HeaderHome = () => {
  return (
    <HeaderComp>
      <ContainerElements>
        <Element href="#">Link One</Element>
        <Element href="#">Link Two</Element>
        <Element href="#">Link Three</Element>
        <Element href="#">Link Four</Element>
        <Element href="#">Link Five</Element>
      </ContainerElements>
      <ContainerButtons></ContainerButtons>
    </HeaderComp>
  )
}
