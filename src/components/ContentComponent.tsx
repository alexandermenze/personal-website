import styled from '@emotion/styled'
import React from 'react'
import { heights, margins, widths } from '../styles/variables'

const StyledContent = styled.div`
  position: relative;
  min-height: 200vh;
  max-width: calc(100vw - ${widths.sideBar * 2 + margins.contentToSideBarMargin}px);
  margin-left: auto;
  margin-right: auto;
  margin-top: ${heights.header + margins.contentToHeaderMargin}px;
`

const ContentComponent: React.FC = ({ children }) => <StyledContent>{children}</StyledContent>

export default ContentComponent
