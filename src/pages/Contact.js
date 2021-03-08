// local components
import HeaderCustom from './bones/HeaderCustom'
import ContactPoint from './bones/ContactPoint'

// style
import { styles } from '../styles'
import { Card } from 'antd'


const points = ["phone", "email", "github", "linkedin", "blog", "twitter"]

function Contact() {
    return (
        <>
            <HeaderCustom pageName='contact' />
            <Card>
                <div style={styles.contactBox}>
                    {points.map(point => <ContactPoint point={point} key={point} />)}
                </div>
            </Card>
        </>
    )
}

export default Contact

