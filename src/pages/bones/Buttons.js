import { useEffect } from 'react'
import { Button } from 'antd'
import gsap from 'gsap'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import h from '../../images/aytch-mt.png'

function Buttons() {
    useEffect(() => {
        // logo does stuff
        gsap.to('.logo', { duration: 2, maxWidth: '10%', opacity: 1, bottom: 0 })
    }, [])
    return (
        <div style={styles.buttonBox}>
            <Link to='/projects' style={styles.equalWidth}>
                <Button style={styles.btnStyle}>
                    PROJECTS
                </Button>
            </Link>
            <img src={h} alt='logo of an H' className='logo' style={styles.logo} />
            <Link to='contact' style={styles.equalWidth}>
                <Button style={styles.btnStyle} >
                    CONTACT
                </Button>
            </Link>
        </div>
    )
}

export default Buttons
