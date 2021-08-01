import * as React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import MainPageComponent from '../components/MainPage'
import PersonalInfo from '../components/PersonalInfo'
import * as ResumeComponent from '../components/Resume'
import { breakpoints } from '../styles/variables'
import PageContentContainer from '../components/PageContentContainer'
import Contact from '../components/Contact'

const resumeEntries: ResumeComponent.ResumeEntry[] = [
  {
    name: 'Grundschule',
    description: (
      <div>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet:
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consetetur sadipscing elitr</li>
          <li>Sed diam nonumy ei</li>
        </ul>
        <p>Invidunt ut labore et dolore magna aliquyam erat:</p>
        <ul>
          <li>eirmod tempor invidunt ut</li>
          <li>labore et dolore magna ali</li>
        </ul>
      </div>
    ),
    timeFrom: 'August 2006',
    timeTo: 'Juni 2010',
    year: '2006'
  },
  {
    name: 'Gymnasium',
    description: (
      <div>
        <p>Invidunt ut labore et dolore magna aliquyam erat:</p>
        <ul>
          <li>eirmod tempor invidunt ut</li>
          <li>labore et dolore magna ali</li>
        </ul>
      </div>
    ),
    timeFrom: 'August 2010',
    timeTo: 'Mai 2017',
    year: '2010'
  },
  {
    name: 'Ausbildung',
    description: (
      <div>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet:
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consetetur sadipscing elitr</li>
          <li>Sed diam nonumy ei</li>
        </ul>
      </div>
    ),
    timeFrom: 'August 2017',
    timeTo: 'Januar 2020',
    year: '2020'
  }
]

const VerticalCenteredContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.lg}px) {
    min-height: 100vh;
  }
`

const SpacerWhenSmall = styled.div`
  height: 0;
  @media (max-width: ${breakpoints.lg}px) {
    height: 150px;
  }
`

const SpacerWhenBig = styled.div`
  height: 0;
  @media (min-width: ${breakpoints.lg}px) {
    height: 150px;
  }
`

const Spacer = styled.div`
  height: 150px;
`

const IndexPage = () => (
  <IndexLayout>
    <MainPageComponent>
      <VerticalCenteredContainer>
        <PageContentContainer>
          <PersonalInfo
            name="Max Mustermann"
            shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
            longDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
          />
        </PageContentContainer>
      </VerticalCenteredContainer>
      <SpacerWhenSmall />
      <PageContentContainer>
        <ResumeComponent.Resume entries={resumeEntries} />
      </PageContentContainer>
      <Spacer />
      <SpacerWhenBig />
      <PageContentContainer>
        <Contact usernameLinkedIn="max.mustermann" usernameXing="max.mustermann" email="kontakt@mustermann.de" />
      </PageContentContainer>
      <Spacer />
      <SpacerWhenBig />
      <SpacerWhenBig />
    </MainPageComponent>
  </IndexLayout>
)

export default IndexPage
