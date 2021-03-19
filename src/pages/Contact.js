// local components
import HeaderCustom from './bones/HeaderCustom'
import ContactPoint from './bones/ContactPoint'

// style
import { styles } from '../styles'
import { Card } from 'antd'

// other libs
import { useEffect } from 'react'
import gsap from 'gsap'


const points = ["phone", "email", "github", "linkedin", "blog", "twitter"]

function Contact() {
    useEffect(() => {
        // animate contact points
        gsap.from('.point', { duration: 1, y: -100, opacity: 0, stagger: .19 })
    }, [])
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

