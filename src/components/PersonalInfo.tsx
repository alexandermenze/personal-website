import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { StaticImage } from 'gatsby-plugin-image'

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

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ProfileImageContainer = styled.div`
  min-width: 300px;
  margin-left: 50px;
`

const RoundedCorners = css`
  border-radius: 25px;
`

interface PersonalInfoProps {
  name: string
  shortDescription: string
  longDescription: string
  imagePath: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, shortDescription, longDescription, imagePath }) => (
  <Container>
    <InnerContainer>
      <div>
        <NameHeader>{name}</NameHeader>
        <ShortDescriptionText>{shortDescription}</ShortDescriptionText>
        <LongDescriptionText>{longDescription}</LongDescriptionText>
      </div>
      <ProfileImageContainer>
        <StaticImage
          imgClassName={`${RoundedCorners}`}
          src="../assets/images/profile_image.jpg"
          alt="Profile image"
          width={300}
          height={300}
        />
      </ProfileImageContainer>
    </InnerContainer>
  </Container>
)

export default PersonalInfo
