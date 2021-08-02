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
  linkPadding: number
  topPadding: number
}

const Container = styled.div``

const Heading = styled.h1`
  margin-bottom: 20px;
`

const ContactItemContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ItemLine = styled.a<{ topPadding: number }>`
  display: flex;
  align-items: stretch;
  margin: 12px;
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
    <Heading>Kontakt</Heading>
    <ContactItemContainer>
      <ContactItem
        linkName="LinkedIn"
        linkAddress={`https://linkedin.com/in/${usernameLinkedIn}`}
        image={<LinkedInIcon />}
        linkPadding={5}
        topPadding={0}
      />
      <ContactItem linkName="Xing" linkAddress={`https://xing.com/${usernameXing}`} image={<XingIcon />} linkPadding={5} topPadding={0} />
      <ContactItem linkName="E-Mail" linkAddress={`mailto:${email}`} image={<MailIcon />} linkPadding={0} topPadding={5} />
    </ContactItemContainer>
  </Container>
)

export default Contact
