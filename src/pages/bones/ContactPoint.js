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
    "phone": <PhoneOutlined style={{ fontSize: 50 }} />,
    "email": <MailOutlined style={{ fontSize: 50 }} />,
    "github": <GithubOutlined style={{ fontSize: 50 }} />,
    "blog": <EditOutlined style={{ fontSize: 50 }} />,
    "linkedin": <LinkedinOutlined style={{ fontSize: 50 }} />,
    "twitter": <TwitterOutlined style={{ fontSize: 50 }} />
}

const detailsMap = {
    "phone": "206-551-5709",
    "email": "heyhal19@gmail.com",
    "github": <a
        href="https://github.com/halented"
        target='_blank'>
        Github</a>,
    "blog": <a
        href='https://dev.to/halented'
        target='_blank'>
        Dev.to</a>,
    "linkedin": <a
        href='https://www.linkedin.com/in/halented/'
        target='_blank'>
        LinkedIn</a>,
    "twitter": <a
        href='https://twitter.com/hey_hal_'
        target='_blank'>
        Twitter</a>
}

function ContactPoint({ point }) {
    return (
        <div style={styles.contactPoint}>
            {iconsMap[[point]]}
            <span style={{ paddingLeft: '8%', fontSize: 25 }}>
                {detailsMap[[point]]}
            </span>
        </div>
    )
}

export default ContactPoint


