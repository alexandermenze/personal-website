import * as React from 'react'
import styled from '@emotion/styled'
import { widths, margins, colors } from '../styles/variables'
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

const StyledMailAdress = styled.a`
  color: ${colors.brand};
  text-decoration: underline;
  writing-mode: vertical-rl;
  position: relative;
  margin-top: ${margins.defaultHalf}px;
  margin-bottom: ${margins.defaultHalf}px;
  margin-left: ${margins.defaultHalf}px;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-${margins.defaultHalf}px);
    color: ${colors.accent};
  }
`

interface MailContactProps {
  mailAddress: string
}

const MailContact: React.FC<MailContactProps> = ({ mailAddress }) => (
  <StyledMailContact>
    <StyledMailAdress href={`mailto:${mailAddress}`}>{mailAddress}</StyledMailAdress>
    <VerticalLine />
  </StyledMailContact>
)

export default MailContact
