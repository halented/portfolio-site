// local components
import HeaderCustom from './bones/HeaderCustom'
import Buttons from './bones/Buttons'
import MusicDetails from './bones/MusicDetails'

// styles
import { Card } from 'antd'
import { styles } from '../styles'


function Profile() {
    return (
        <>
            <HeaderCustom pageName='about' />
            <Card>
                <h1 style={styles.profileHeader}>
                    FULL STACK SOFTWARE ENGINEER
                </h1>
                <div style={styles.infoBody}>
                    Hi! I'm Hal.👋 I've got a lot of interests in life -- JavaScript, backpacking, turn-based RPGs, <MusicDetails />, and someday finally tiring out my border collie. I'm proudly from some random town in Ohio, where I earned my Bachelor's degree, and am currently living in Seattle, where I taught software engineering at Flatiron School for nearly 2 years.
                    <br></br>
                    <br></br>
                    While I have a real love for training and education, I'm making the move to use my compassionate ear and software engineering expertise as a part of an engineering team, so I can spend more time exploring & expanding my technical interests. If you've made it here, feel free to drop a line -- I'd love to discuss what brought you.
                </div>
                <Buttons />
            </Card>
        </>
    )
}

// replace music with this: <MusicDetails />
export default Profile