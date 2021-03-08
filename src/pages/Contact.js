// local components
import HeaderCustom from './bones/HeaderCustom'
import ContactPoint from './bones/ContactPoint'

// style
import { styles } from '../styles'
import { Card } from 'antd'



const points = ["phone", "email", "github", "blog", "linkedin", "twitter"]
function Contact() {
    return (
        <>
            <HeaderCustom pageName='contact' />
            <Card>
                {/* outter div should just be flex align center vert */}
                <div style={styles.contactBox}>
                    {points.map(point => <ContactPoint point={point} />)}
                </div>
            </Card>
        </>
    )
}

export default Contact

