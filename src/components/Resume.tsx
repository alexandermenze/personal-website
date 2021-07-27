import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints, cssValues, margins } from '../styles/variables'

const Container = styled.div`
  position: relative;
  margin-top: ${margins.contentToHeaderMargin * 2}px;
  margin-bottom: ${margins.contentToHeaderMargin}px;
  margin-right: auto;
  margin-left: auto;
  width: auto;
  height: ${cssValues.usableScreenHeight};
`

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.lg}px) {
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${breakpoints.lg}px) {
    flex-wrap: wrap;
  }
`

export interface ResumeEntry {
  name: string
  description: string
  timeFrom: string
  timeTo: string
}

interface ResumeProps {
  entries: ResumeEntry[]
}

const Resume: React.FC<ResumeProps> = ({ entries }) => (
  <Container>
    <ContentContainer>
      <h1>Lebenslauf</h1>
      <tbody>
        {entries.map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{e.name}</p>
        ))}
      </tbody>
    </ContentContainer>
  </Container>
)

export { Resume }
