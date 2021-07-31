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
          <div>
            <h1>Lebenslauf</h1>
          </div>
          <div>
            <TabContainer tabs={tabs} />
          </div>
        </ContentContainer>
      </Container>
    )
  }
}

export { Resume }
