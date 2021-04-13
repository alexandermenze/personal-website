import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as styles from './header.module.scss'
import SocialButton from './social-button.js'

const HeaderLink = props => (
    <Link className={styles.link} to={props.to}>{props.text}</Link>
)

const HomeButton = props => (
    <Link to={props.to}>
        <div className={styles.button}>{props.text}</div>
    </Link>
)

export default () => (

    <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `}
        render={data => (
            <header className={styles.container}>
                <div className={styles.row}>
                    <HeaderLink to='/' text='ARTICLES' />
                    <HeaderLink to='/about' text='ABOUT' />
                </div>
            </header>
        )}
    />
)