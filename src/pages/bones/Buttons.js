import { Button } from 'antd'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import h from '../../images/aytch-mt.png'

const btnStyle = { backgroundColor: '#9ac6c8ff', fontWeight: 'bold', marginTop: '10%' }

function Buttons() {
    return (
        <div style={styles.buttonBox}>
            <Link to='/projects'>
                <Button style={btnStyle}>
                    PROJECTS
                </Button>
            </Link>
            <img src={h} alt='logo of an H' />
            <Link to='contact'>
                <Button style={btnStyle}>
                    CONTACT
                </Button>
            </Link>
        </div>
    )
}

export default Buttons
