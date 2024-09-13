import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

export const FooterContainer = styled.footer`
  width: 100%;
  background: var(--black1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: 1.5px solid var(--grey3);
  z-index: 1000;
  @media ${breakpoint.sm2} {
    padding: 10px;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 150px;
  height: auto;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media ${breakpoint.sm2} {
    gap: 10px;
  }
`

export const MainLink = styled.a`
  color: var(--greyDefault);
  text-decoration: none;
  font-size: 14px;
  padding: 4px;
  transition: var(--transition-color-slow);

  &:hover {
    color: var(--whiteDefault);
    text-decoration: underline;
  }
  @media ${breakpoint.sm1} {
    font-size: 12px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  @media ${breakpoint.sm0} {
    margin-bottom: 5px;
    gap: 10px;
  }
`

export const SocialIcon = styled.a`
  color: var(--whiteDefault);
  font-size: 24px;
  transition: var(--transition-color-fast);

  &:hover {
    color: var(--grey2);
  }
  @media ${breakpoint.sm0} {
    font-size: 20px;
  }
`

export const Copyright = styled.div`
  font-size: 10px;
  color: var(--whiteDefault);
  text-align: center;
  width: 100%;
  margin-top: 20px;
  @media ${breakpoint.sm0} {
    font-size: 8px;
  }
`

export { FaInstagram, FaLinkedin, FaGithub, FaDiscord }
