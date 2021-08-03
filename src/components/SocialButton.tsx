import * as React from 'react'
import styled from '@emotion/styled'
import { widths, margins, colors } from '../styles/variables'
import LinkedInIcon from '../assets/linkedin.svg'
import XingIcon from '../assets/xing.svg'
import VerticalLine from './VerticalLine'

enum SocialSite {
  LinkedIn,
  Xing
}

const StyledSocialButtonList = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${widths.sideBar}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialButtonList: React.FC = ({ children }) => (
  <StyledSocialButtonList>
    {children}
    <VerticalLine />
  </StyledSocialButtonList>
)

function getSocialIcon(site: SocialSite): React.ReactElement {
  switch (site) {
    case SocialSite.LinkedIn:
      return <LinkedInIcon />
    case SocialSite.Xing:
      return <XingIcon />
    default:
      throw new Error('Invalid site!')
  }
}

function getSocialUrl(site: SocialSite, username: string): string {
  switch (site) {
    case SocialSite.LinkedIn:
      return `https://linkedin.com/in/${username}`
    case SocialSite.Xing:
      return `https://xing.com/${username}`
    default:
      throw new Error('Invalid site!')
  }
}

const StyledSocialButton = styled.a`
  position: relative;
  width: ${widths.socialIcon}px;
  margin-top: ${margins.defaultHalf}px;
  margin-bottom: ${margins.defaultHalf}px;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-${margins.defaultHalf}px);
  }

  path {
    fill: ${colors.brand.default};
    transition: fill 0.2s;
  }

  &:hover path {
    fill: ${colors.accent};
  }
`

interface SocialButtonProps {
  site: SocialSite
  username: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ site, username }) => (
  <StyledSocialButton href={getSocialUrl(site, username)}>{getSocialIcon(site)}</StyledSocialButton>
)

export { SocialButtonList, SocialButton, SocialSite }
