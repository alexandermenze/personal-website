import styled from '@emotion/styled'
import React from 'react'
import { margins, widths } from '../styles/variables'

const StyledContent = styled.div`
  position: relative;
  min-height: 200vh;
  max-width: calc(100vw - ${widths.sideBar * 2 + margins.contentToSideBarMargin}px);
  margin: auto;
`

const ContentComponent: React.FC = ({ children }) => <StyledContent>{children}</StyledContent>

export default ContentComponent
