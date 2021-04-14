import React from 'react'
import * as styles from './horizontal-social-button-list.module.scss'
import SocialButton from './social-button';

class HorizontalSocialButtonList extends React.Component {
    render() {
        return (
            <div className={styles.list}>
                <SocialButton social='linkedin' username='test' />
                <SocialButton social='xing' username='test' />
            </div>
        )
    }
}

export default HorizontalSocialButtonList;