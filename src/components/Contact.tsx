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

const LinkText = styled.p`
  text-align: center;
`

const ContactItem: React.FC<ContactItemProps> = ({ linkName, linkAddress, image }) => (
  <a href={linkAddress}>
    <ItemLine>
      <IconContainer>{image}</IconContainer>
      <LinkText>{linkName}</LinkText>
    </ItemLine>
  </a>
)

const Contact: React.FC<ContactProps> = ({ usernameLinkedIn, usernameXing, email }) => (
  <Container>
    <Heading>Kontakt</Heading>
    <ContactItem linkName="LinkedIn" linkAddress={`https://linkedin.com/in/${usernameLinkedIn}`} image={<LinkedInIcon />} />
    <ContactItem linkName="Xing" linkAddress={`https://xing.com/${usernameXing}`} image={<XingIcon />} />
    <ContactItem linkName="E-Mail" linkAddress={`mailto:${email}`} image={<MailIcon />} />
  </Container>
)

export default Contact
