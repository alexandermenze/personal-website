import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
    <Layout>
        <Title text='About Me' />
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <p>
            Lorem ipsum about
        </p>
    </Layout>
)
