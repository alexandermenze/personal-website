import * as React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import MainPageComponent from '../components/MainPage'
import PersonalInfo from '../components/PersonalInfo'
import * as ResumeComponent from '../components/Resume'
import { breakpoints } from '../styles/variables'
import PageContentContainer from '../components/PageContentContainer'

const resumeEntries: ResumeComponent.ResumeEntry[] = [
  {
    name: 'Grundschule',
    description: 'Das kleine Einmaleins gelernt.',
    timeFrom: 'August 2006',
    timeTo: 'Juni 2010',
    year: '2006'
  },
  {
    name: 'Gymnasium',
    description: 'In Latein nie aufgepasst.',
    timeFrom: 'August 2010',
    timeTo: 'Mai 2017',
    year: '2010'
  },
  {
    name: 'Ausbildung',
    description: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Polipol Holding GmbH & Co. KG.',
    timeFrom: 'Januar 2020',
    timeTo: 'August 2017',
    year: '2020'
  }
]

const VerticalCenteredContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.lg}px) {
    min-height: 100vh;
    top: 50%;
    transform: translateY(-50%);
  }
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
    </MainPageComponent>
  </IndexLayout>
)

export default IndexPage
