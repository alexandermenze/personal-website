import * as React from 'react'
import styled from '@emotion/styled'
import LinkedInIcon from '../assets/linkedin.svg'
import XingIcon from '../assets/xing.svg'
import MailIcon from '../assets/envelope-solid.svg'

interface ContactProps {
  usernameLinkedIn: string
  usernameXing: string
  email: string
}

interface ContactItemProps {
  linkName: string
  linkAddress: string
  image: React.ReactNode
  customPadding: number
}

const Container = styled.div``

const Heading = styled.h1`
  margin-bottom: 20px;
`

const ItemLine = styled.a`
  display: flex;
  align-items: stretch;
  margin: 8px 0;
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

const ContactItem: React.FC<ContactItemProps> = ({ linkName, linkAddress, image, customPadding }) => (
  <a href={linkAddress}>
    <ItemLine>
      <IconContainer>{image}</IconContainer>
      <LinkText customPadding={customPadding}>{linkName}</LinkText>
    </ItemLine>
  </a>
)

const Contact: React.FC<ContactProps> = ({ usernameLinkedIn, usernameXing, email }) => (
  <Container>
    <Heading>Kontakt</Heading>
    <ContactItem
      linkName="LinkedIn"
      linkAddress={`https://linkedin.com/in/${usernameLinkedIn}`}
      image={<LinkedInIcon />}
      customPadding={5}
    />
    <ContactItem linkName="Xing" linkAddress={`https://xing.com/${usernameXing}`} image={<XingIcon />} customPadding={5} />
    <ContactItem linkName="E-Mail" linkAddress={`mailto:${email}`} image={<MailIcon />} customPadding={0} />
  </Container>
)

export default Contact
