import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { StaticImage } from 'gatsby-plugin-image'
import { breakpoints, colors, cssValues } from '../styles/variables'

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

  @media (max-width: ${breakpoints.lg}px) {
    margin-top: 30px;
  }
`

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.lg}px) {
    flex-wrap: wrap;
  }
`

const NameHeader = styled.h1`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 100em;
  animation: 0.5s ease-out 0s 1 ${opacityAnimation};
`

const HorizontalLine = styled.div`
  margin-top: 10px;
  height: 2px;
  width: 200px;
  background-color: ${colors.brand.default};

  @media (max-width: ${breakpoints.xl}px) {
    display: none;
  }
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

const ProfileImageContainer = styled.div`
  min-width: 300px;
  margin-left: 50px;
  border-radius: 0.4rem;
  box-shadow: 0 0 12px ${colors.gray.light};

  @media (max-width: ${breakpoints.lg}px) {
    margin-right: 50px;
    margin-top: 50px;
    min-width: unset;
  }

  > div {
    border-radius: 0.4rem;
  }
`

interface PersonalInfoProps {
  name: string
  shortDescription: string
  longDescription: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, shortDescription, longDescription }) => (
  <Container>
    <InnerContainer>
      <div>
        <NameHeader>{name}</NameHeader>
        <ShortDescriptionText>{shortDescription}</ShortDescriptionText>
        <LongDescriptionText>{longDescription}</LongDescriptionText>
      </div>
      <ProfileImageContainer>
        <StaticImage src="../assets/images/profile_image.jpg" alt="Profile image" width={300} height={300} />
      </ProfileImageContainer>
    </InnerContainer>
    <HorizontalLine />
  </Container>
)

export default PersonalInfo
