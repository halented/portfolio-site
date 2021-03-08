import { Button } from 'antd'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'

function Buttons() {
    return (
        <div style={styles.buttonBox}>
            <Link to='/projects'>
                <Button style={{ backgroundColor: '#9ac6c8ff', fontWeight: 'bold' }}>
                    PROJECTS
                </Button>
            </Link>
            <Link to='contact'>
                <Button style={{ backgroundColor: '#9ac6c8ff', fontWeight: 'bold' }}>
                    CONTACT
                </Button>
            </Link>
        </div>
    )
}

export default Buttons
