import {
  FooterContainer,
  LogoBox,
  Logo,
  LinksContainer,
  MainContainer,
  MainLink,
  SocialIcons,
  SocialIcon,
  Copyright,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from './style'

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <SocialIcons>
          <SocialIcon
            href="https://www.instagram.com/gusdev_r/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/gusdev-r/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/gusdev-r"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://discord.gg/NHAYF9EryF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SocialIcon>
        </SocialIcons>

        <Copyright>&copy; 2024 gusdev_r. All rights reserved.</Copyright>
      </LinksContainer>
    </FooterContainer>
  )
}
