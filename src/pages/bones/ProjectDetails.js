import card from '../../images/card.png'
import { styles } from '../../styles'
import { DetailBlurbs } from './DetailBlurbs.js'

function ProjectDetails({ project, flipCard }) {
    return (
        <>
            <img
                src={card}
                style={styles.projectDetails}
                onClick={flipCard}
                alt='blank space for background purposes'>
            </img>
            <div style={styles.projectBlurb} onClick={flipCard}>
                {DetailBlurbs[[project]]}
            </div>
        </>
    )
}

export default ProjectDetails