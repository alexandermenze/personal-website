import styled from '@emotion/styled'
import React from 'react'
import { heights, margins, breakpoints } from '../styles/variables'

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

const ContentComponent: React.FC = ({ children }) => <StyledContent>{children}</StyledContent>

export default ContentComponent
