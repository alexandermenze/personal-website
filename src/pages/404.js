import React from "react"
import * as styles from "./404.module.scss"
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
    <Layout className={styles.content}>
        <h1 className={styles.header}>404 - Page not found</h1>
        <p className={styles.errorMessage}>
            Lorem ipsum 404
        </p>
        <Link to='/'>Home</Link>
    </Layout>
)
