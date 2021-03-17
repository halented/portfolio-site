import { Button } from 'antd'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import h from '../../images/aytch-mt.png'

function Buttons() {
    return (
        <div style={styles.buttonBox}>
            <Link to='/projects'>
                <Button style={styles.btnStyle}>
                    PROJECTS
                </Button>
            </Link>
            <img src={h} alt='logo of an H' style={styles.logo} />
            <Link to='contact'>
                <Button style={styles.btnStyle}>
                    CONTACT
                </Button>
            </Link>
        </div>
    )
}

export default Buttons
