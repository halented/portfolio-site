import { useEffect } from 'react'
import { Button } from 'antd'
import gsap from 'gsap'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import h from '../../images/aytch-mt.png'

function Buttons() {
    useEffect(() => {
        // logo drops down
        gsap.from('.logo', { duration: 2, y: -200, opacity: 0 })
    }, [])
    return (
        <div style={styles.buttonBox}>
            <Link to='/projects' >
                <Button style={styles.btnStyle}>
                    PROJECTS
                </Button>
            </Link>
            <img src={h} alt='logo of an H' style={styles.logo} className='logo' />
            <Link to='contact'>
                <Button style={styles.btnStyle}>
                    CONTACT
                </Button>
            </Link>
        </div>
    )
}

export default Buttons
