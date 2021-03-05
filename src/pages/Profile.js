import HeaderCustom from './bones/HeaderCustom'
import Buttons from './bones/Buttons'
import { Card } from 'antd'
import { styles } from '../styles'

function Profile() {
    return (
        <>
            <HeaderCustom pageName='profile' />
            <Card>
                <h1 style={styles.profileHeader}>
                    FULL STACK SOFTWARE ENGINEER
                </h1>
                <p style={styles.infoBody}>
                    Blurb about me. I’m super interesting. I’ve built twelve statues; all of myself. I could insulate the great wall with the amount of dog hair in my bedroom alone. Top most big tough vigor night likely brought time from guy fieri you know what they all know what we all -- in the long run.
                </p>
                <Buttons />
            </Card>
        </>
    )
}

export default Profile
