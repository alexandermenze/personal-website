import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledContainer = styled.h1`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 100em;
  height: 100vh;
  animation: 1s ease-out 0s 1 ${opacityAnimation};
`

interface TestProps {
  name?: string
}

const TestComponent: React.FC<TestProps> = ({ name }) => <StyledContainer>{name}</StyledContainer>

export default TestComponent
