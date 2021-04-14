import React from 'react'
import * as styles from './layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'
import SocialButtonList from './social-button-list'
import SocialContact from './social-contact'
import HorizontalSocialButtonList from './horizontal-social-button-list'

export default ({ children }) => (
    <div className={styles.pageContainer}>
        <div className={styles.content}>
            <div>
                {children}
            </div>
            <div className={styles.socialButtonFooter}>
                <HorizontalSocialButtonList />
            </div>
        </div>

        <div className={styles.sideContainerLeft}>
            <SocialButtonList />
        </div>

        <div className={styles.sideContainerRight}>
            <SocialContact />
        </div>
    </div>
)