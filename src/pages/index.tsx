import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import MainPageComponent from '../components/MainPage'
import PersonalInfo from '../components/PersonalInfo'
import * as ResumeComponent from '../components/Resume'

const resumeEntries: ResumeComponent.ResumeEntry[] = [
  {
    name: 'Grundschule',
    description: 'Das kleine Einmaleins gelernt.',
    timeFrom: 'August 2006',
    timeTo: 'Juni 2010'
  },
  {
    name: 'Gymnasium',
    description: 'In Latein nie aufgepasst.',
    timeFrom: 'August 2010',
    timeTo: 'Mai 2017'
  },
  {
    name: 'Ausbildung',
    description: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Polipol Holding GmbH & Co. KG.',
    timeFrom: 'Januar 2020',
    timeTo: 'August 2017'
  }
]

const IndexPage = () => (
  <IndexLayout>
    <MainPageComponent>
      <PersonalInfo
        name="Max Mustermann"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        longDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
      />
      <ResumeComponent.Resume entries={resumeEntries} />
    </MainPageComponent>
  </IndexLayout>
)

export default IndexPage

/* <Page>
  <TestComponent name="Loretta Tokarska" />
  <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Container>
</Page>
*/
