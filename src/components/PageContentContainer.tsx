import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/variables'

const BreakpointContainer = styled.div`
  position: relative;
  display: block;

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

const PageContentContainer: React.FC = ({ children }) => <BreakpointContainer>{children}</BreakpointContainer>

export default PageContentContainer
