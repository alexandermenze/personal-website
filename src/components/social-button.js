import React from 'react'
import LinkedInIcon from '../assets/linkedin.svg'
import XingIcon from '../assets/xing.svg'
import * as styles from './social-button.module.scss'

class SocialButton extends React.Component {

    findUrlAndIcon() {
        switch (this.props.social) {
            case 'linkedin': return [
                'https://linkedin.com/in/' + this.props.username,
                <LinkedInIcon />
            ];
            case 'xing': return [
                'https://xing.com/' + this.props.username,
                <XingIcon />
            ]
            default: return null;
        }
    }

    render() {
        const [url, IconTag] = this.findUrlAndIcon();

        return (
            <a href={url} className={styles.socialButton}>
                {IconTag}
            </a>
        )
    }
}

export default SocialButton;