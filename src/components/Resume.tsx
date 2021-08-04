/* eslint-disable react/prefer-stateless-function */
import * as React from 'react'
import styled from '@emotion/styled'
import { TabContainer, Tab } from './TabContainer'
import { breakpoints, colors, fonts } from '../styles/variables'

const Container = styled.div`
  position: relative;
  top: 0;
`

const ContentContainer = styled.div`
  position: relative;
`

const Heading = styled.h1``

const TimeFrame = styled.p`
  font-family: ${fonts.monospace};
`

const HorizontalLine = styled.div`
  height: 2px;
  width: 200px;
  margin-left: 50px;
  display: inline;
  background-color: ${colors.brand.default};

  @media (max-width: ${breakpoints.xl}px) {
    display: none;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`

const ResumeContentContainer = styled.div`
  box-shadow: 0 0 12px ${colors.gray.light};
  background-color: ${colors.white};
  border-radius: 0.4em;
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
        content: (
          <div>
            <TimeFrame>{`${e.timeFrom} — ${e.timeTo}`}</TimeFrame>
            {e.description}
          </div>
        )
      }
    })

    return (
      <Container>
        <ContentContainer>
          <HeadingContainer>
            <Heading>Lebenslauf</Heading>
            <HorizontalLine />
          </HeadingContainer>
          <ResumeContentContainer>
            <TabContainer tabs={tabs} />
          </ResumeContentContainer>
        </ContentContainer>
      </Container>
    )
  }
}

export { Resume }
