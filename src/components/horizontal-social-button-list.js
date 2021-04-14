import React from 'react'
import * as styles from './horizontal-social-button-list.module.scss'
import SocialButton from './social-button';

class HorizontalSocialButtonList extends React.Component {
    render() {
        return (
            <div className={styles.list}>
                <div className={styles.item}>
                    <SocialButton social='linkedin' username='test' />
                </div>
                <div className={styles.item}>
                    <SocialButton social='xing' username='test' />
                </div>
            </div>
        )
    }
}

export default HorizontalSocialButtonList;