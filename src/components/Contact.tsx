import * as React from 'react'
import styled from '@emotion/styled'
import LinkedInIcon from '../assets/linkedin.svg'
import XingIcon from '../assets/xing.svg'
import MailIcon from '../assets/envelope-solid.svg'
import { breakpoints, colors } from '../styles/variables'

interface ContactProps {
  usernameLinkedIn: string
  usernameXing: string
  email: string
}

interface ContactItemProps {
  linkName: string
  linkAddress: string
  image: React.ReactNode
  linkPadding: number
  topPadding: number
}

const Container = styled.div``

const Heading = styled.h1`
  margin: 0 50px;
  text-align: center;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const ContactItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ItemLine = styled.a<{ topPadding: number }>`
  display: flex;
  align-items: stretch;
  margin: 12px 20px;
  padding-top: ${p => p.topPadding}px;
`

const IconContainer = styled.div`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`

const LinkText = styled.p<{ customPadding: number }>`
  text-align: center;
  padding-top: ${p => p.customPadding}px;
  padding-bottom: 0;
`

const HorizontalLine = styled.div`
  height: 2px;
  width: 200px;
  display: inline;
  background-color: ${colors.brand.default};

  @media (max-width: ${breakpoints.xl}px) {
    display: none;
  }
`

const ContactItem: React.FC<ContactItemProps> = ({ linkName, linkAddress, image, linkPadding, topPadding }) => (
  <a href={linkAddress}>
    <ItemLine topPadding={topPadding}>
      <IconContainer>{image}</IconContainer>
      <LinkText customPadding={linkPadding}>{linkName}</LinkText>
    </ItemLine>
  </a>
)

const Contact: React.FC<ContactProps> = ({ usernameLinkedIn, usernameXing, email }) => (
  <Container>
    <HeadingContainer>
      <HorizontalLine />
      <Heading>Kontakt</Heading>
      <HorizontalLine />
    </HeadingContainer>
    <ContactItemContainer>
      <ContactItem
        linkName={`${usernameLinkedIn}`}
        linkAddress={`https://linkedin.com/in/${usernameLinkedIn}`}
        image={<LinkedInIcon />}
        linkPadding={5}
        topPadding={0}
      />
      <ContactItem linkName={`${email}`} linkAddress={`mailto:${email}`} image={<MailIcon />} linkPadding={0} topPadding={5} />
    </ContactItemContainer>
  </Container>
)

export default Contact
