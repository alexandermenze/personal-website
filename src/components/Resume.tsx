/* eslint-disable react/prefer-stateless-function */
import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints, cssValues, margins } from '../styles/variables'
import { TabContainer, Tab } from './TabContainer'

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
  flex-direction: column;
  justify-content: stretch;
  align-items: start;

  @media (min-width: ${breakpoints.lg}px) {
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${breakpoints.lg}px) {
    flex-wrap: wrap;
  }
`

const Heading = styled.h1`
  margin-bottom: 20px;
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

class Resume extends React.Component<ResumeProps> {
  render() {
    const { entries } = this.props

    const tabs: Tab[] = entries.map(e => {
      return {
        name: e.name,
        content: <p>{e.description}</p>
      }
    })

    return (
      <Container>
        <ContentContainer>
          <Heading>Lebenslauf</Heading>
          <div>
            <TabContainer tabs={tabs} />
          </div>
        </ContentContainer>
      </Container>
    )
  }
}

export { Resume }
