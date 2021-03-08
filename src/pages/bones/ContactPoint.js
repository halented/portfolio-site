import {
    PhoneOutlined,
    MailOutlined,
    TwitterOutlined,
    GithubOutlined,
    LinkedinOutlined
} from '@ant-design/icons'

const iconsMap = {
    "phone": <PhoneOutlined />,
    "email": <MailOutlined />,
    "github": <GithubOutlined />,
    "blog": <LinkedinOutlined />,
    "linkedin": <LinkedinOutlined />,
    "twitter": <TwitterOutlined />
}

function ContactPoint({ point }) {
    return (
        <div>
            {iconsMap[[point]]}
        </div>
    )
}

export default ContactPoint


