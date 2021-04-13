import React from 'react';
import * as styles from './social-contact.module.scss'

class SocialContact extends React.Component {

    render() {
        return (
            <div className={styles.content}>
                <div>
                    <a href='mailto:kontakt@tokarska.de' className={styles.contactEmail}>kontakt@tokarska.de</a>
                </div>
                <div className={styles.line} />
            </div>
        )
    }
}

export default SocialContact;