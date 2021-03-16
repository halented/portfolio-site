import ReactTooltip from 'react-tooltip'
import { styles } from '../../styles'
import {
    PhoneOutlined,
    MailOutlined,
    TwitterOutlined,
    GithubOutlined,
    LinkedinOutlined,
    EditOutlined
} from '@ant-design/icons'

const iconsMap = {
    "phone": <PhoneOutlined style={styles.contactIcon} />,
    "email": <MailOutlined style={styles.contactIcon} />,
    "github": <GithubOutlined style={styles.contactIcon} />,
    "blog": <EditOutlined style={styles.contactIcon} />,
    "linkedin": <LinkedinOutlined style={styles.contactIcon} />,
    "twitter": <TwitterOutlined style={styles.contactIcon} />
}

const detailsMap = {
    "phone": <a href='tel:206-551-5709'>206-551-5709</a>,
    "email": <a
        data-for='email'
        data-tip={'heyhal19@gmail.com'}
        href='mailto:heyhal19@gmail.com'>HeyHal19</a>,
    "github": <a
        href='https://github.com/halented'
        target='_blank'
        rel='noreferrer'>
        Github</a>,
    "blog": <a
        href='https://dev.to/halented'
        target='_blank'
        rel='noreferrer'>
        Dev.to</a>,
    "linkedin": <a
        href='https://www.linkedin.com/in/halented/'
        target='_blank'
        rel='noreferrer'>
        LinkedIn</a>,
    "twitter": <a
        href='https://twitter.com/hey_hal_'
        target='_blank'
        rel='noreferrer'>
        Twitter</a>
}

function ContactPoint({ point }) {
    return (
        <div style={styles.contactPoint}>
            {iconsMap[[point]]}
            <div style={styles.contactDetail}>
                {detailsMap[[point]]}
                {point === 'email' ?
                    <ReactTooltip
                        id='email'
                        effect={'solid'}
                    />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default ContactPoint


