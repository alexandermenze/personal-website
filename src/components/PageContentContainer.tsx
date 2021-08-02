import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/variables'

const BreakpointContainer = styled.div<{ isCentered: boolean }>`
  position: relative;
  display: block;
  ${p => (p.isCentered ? `margin: 0;` : `margin: 0 auto;`)}

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
    ${p => (p.isCentered ? `margin: 0 auto;` : ``)}
  }
`

interface PageContentContainerProps {
  isCentered: boolean
}

const PageContentContainer: React.FC<PageContentContainerProps> = ({ children, isCentered }) => (
  <BreakpointContainer isCentered={isCentered}>{children}</BreakpointContainer>
)

export default PageContentContainer
