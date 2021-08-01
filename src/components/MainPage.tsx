import * as React from 'react'
import styled from '@emotion/styled'
import { SocialButton, SocialButtonList, SocialSite } from './SocialButton'
import { breakpoints, heights, margins, widths } from '../styles/variables'
import MailContact from './MailContact'

const StyledMainPage = styled.div`
  overflow: hidden;
  margin-left: ${margins.defaultDouble}px;
  margin-right: ${margins.defaultDouble}px;

  @media (min-width: ${breakpoints.md}px) {
    margin-left: ${widths.sideBar}px;
    margin-right: ${widths.sideBar}px;
  }
`

const HideIfLessThanMedium = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <ChildrenContainer>{children}</ChildrenContainer>
    <HideIfLessThanMedium>
      <MailContact mailAddress="kontakt@mustermann.de" />
    </HideIfLessThanMedium>
  </StyledMainPage>
)

export default MainPageComponent
