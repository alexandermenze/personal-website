/* eslint-disable react/prefer-stateless-function */
import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints, cssValues, margins } from '../styles/variables'
import { TabContainer, Tab } from './TabContainer'

const Container = styled.div`
  position: relative;
  top: 0;
`

const ContentContainer = styled.div`
  position: relative;
`

const Heading = styled.h1`
  margin-bottom: 20px;
`

export interface ResumeEntry {
  name: string
  description: React.ReactNode
  timeFrom: string
  timeTo: string
  year: string
}

interface ResumeProps {
  entries: ResumeEntry[]
}

class Resume extends React.Component<ResumeProps> {
  render() {
    const { entries } = this.props

    const tabs: Tab[] = entries.map(e => {
      return {
        title: e.name,
        subtitle: e.year,
        content: e.description
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
