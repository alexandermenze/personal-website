import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import MainPageComponent from '../components/MainPage'
import PersonalInfo from '../components/PersonalInfo'

const IndexPage = () => (
  <IndexLayout>
    <MainPageComponent>
      <PersonalInfo
        name="Max Mustermann"
        imagePath="../assets/images/profile_image.jpg"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        longDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
      />
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
