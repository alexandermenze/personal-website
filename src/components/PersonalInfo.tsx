import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const opacityAnimation = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 100em;
  height: 100vh;
`

const NameHeader = styled.h1`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 100em;
  animation: 0.5s ease-out 0s 1 ${opacityAnimation};
`

const ShortDescriptionText = styled.h4`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  animation: 1.5s ease-out 0s 1 ${opacityAnimation};
`

const LongDescriptionText = styled.p`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  animation: 1.5s ease-out 0s 1 ${opacityAnimation};
`

interface PersonalInfoProps {
  name: string
  shortDescription: string
  longDescription: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, shortDescription, longDescription }) => (
  <Container>
    <NameHeader>{name}</NameHeader>
    <ShortDescriptionText>{shortDescription}</ShortDescriptionText>
    <LongDescriptionText>{longDescription}</LongDescriptionText>
  </Container>
)

export default PersonalInfo
