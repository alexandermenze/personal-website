import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import TestComponent from '../components/Test'
import MainPageComponent from '../components/MainPage'

const IndexPage = () => (
  <IndexLayout>
    <MainPageComponent>
      <TestComponent name="Max Mustermann" />
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
