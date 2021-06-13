import * as React from 'react'
import styled from '@emotion/styled'
import { SocialButton, SocialButtonList, SocialSite } from './SocialButton'
import { breakpoints, heights, margins, widths } from '../styles/variables'
import MailContact from './MailContact'

const StyledMainPage = styled.div`
  margin-left: ${margins.defaultDouble}px;
  margin-right: ${margins.defaultDouble}px;

  @media (min-width: ${breakpoints.md}px) {
    margin-left: ${widths.sideBar}px;
    margin-right: ${widths.sideBar}px;
  }
`

const StyledContent = styled.div`
  position: relative;
  min-height: 200vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${heights.header + margins.contentToHeaderMargin}px;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 450px;
  }

  @media (min-width: ${breakpoints.md}px) {
    max-width: 550px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 730px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 900px;
  }
`

const HideIfLessThanMedium = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

interface MainPageProps {
  className?: string
}

const MainPageComponent: React.FC<MainPageProps> = ({ children, className }) => (
  <StyledMainPage className={className}>
    <HideIfLessThanMedium>
      <SocialButtonList>
        <SocialButton site={SocialSite.LinkedIn} username="max.mustermann" />
        <SocialButton site={SocialSite.Xing} username="max.mustermann" />
      </SocialButtonList>
    </HideIfLessThanMedium>
    <StyledContent>{children}</StyledContent>
    <HideIfLessThanMedium>
      <MailContact mailAddress="kontakt@mustermann.de" />
    </HideIfLessThanMedium>
  </StyledMainPage>
)

export default MainPageComponent
