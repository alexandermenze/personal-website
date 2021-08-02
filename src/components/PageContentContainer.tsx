import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/variables'

const BreakpointContainer = styled.div`
  position: relative;
  display: block;
  margin: 0;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 450px;
    width: 450px;
  }

  @media (min-width: ${breakpoints.md}px) {
    max-width: 550px;
    width: 550px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 730px;
    width: 730px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 900px;
    width: 900px;
    margin: 0 auto;
  }
`

const PageContentContainer: React.FC = ({ children }) => <BreakpointContainer>{children}</BreakpointContainer>

export default PageContentContainer
