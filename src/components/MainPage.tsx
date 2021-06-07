import * as React from 'react'
import styled from '@emotion/styled'
import { SocialButton, SocialButtonList, SocialSite } from './SocialButton'
import { widths } from '../styles/variables'
import MailContact from './MailContact'
import ContentComponent from './ContentComponent'

const StyledMainPage = styled.div`
  margin-left: ${widths.sideBar}px;
  margin-right: ${widths.sideBar}px;
`

interface MainPageProps {
  className?: string
}

const MainPageComponent: React.FC<MainPageProps> = ({ children, className }) => (
  <StyledMainPage className={className}>
    <SocialButtonList>
      <SocialButton site={SocialSite.LinkedIn} username="max.mustermann" />
      <SocialButton site={SocialSite.Xing} username="max.mustermann" />
    </SocialButtonList>
    <ContentComponent>{children}</ContentComponent>
    <MailContact mailAddress="kontakt@mustermann.de" />
  </StyledMainPage>
)

export default MainPageComponent
