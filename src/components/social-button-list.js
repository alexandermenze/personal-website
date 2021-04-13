import React from "react";
import SocialButton from "./social-button";
import * as styles from './social-button-list.module.scss'

class SocialButtonList extends React.Component {

    render() {
        return (
            <div className={styles.list}>
                <SocialButton social='linkedin' username='test' />
                <SocialButton social='xing' username='test' />
                <div className={styles.line} />
            </div>
        )
    }
}

export default SocialButtonList;