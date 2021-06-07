import * as React from 'react'
import styled from '@emotion/styled'
import { widths, margins } from '../styles/variables'
import VerticalLine from './VerticalLine'

const StyledMailContact = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${widths.sideBar}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMailAdress = styled.p`
  position: relative;
  margin-top: ${margins.defaultHalf}px;
  margin-bottom: ${margins.defaultHalf}px;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-${margins.defaultHalf}px);
  }
`

interface MailContactProps {
  mailAddress: string
}

const MailContact: React.FC<MailContactProps> = ({ mailAddress }) => (
  <StyledMailContact>
    <StyledMailAdress>{mailAddress}</StyledMailAdress>
    <VerticalLine />
  </StyledMailContact>
)

export default MailContact
