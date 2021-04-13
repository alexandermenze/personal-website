import React from 'react'
import * as styles from './layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'
import SocialButtonList from './social-button-list'
import SocialContact from './social-contact'

export default ({ children }) => (
    <div className={styles.pageContainer}>
        <div className={styles.content}>
            {children}
        </div>

        <div className={styles.sideContainerLeft}>
            <SocialButtonList className={styles.sideContainerContent} />
        </div>

        <div className={styles.sideContainerRight}>
            <SocialContact />
        </div>
    </div>
)