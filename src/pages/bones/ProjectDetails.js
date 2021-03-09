import card from '../../images/card.png'
import { styles } from '../../styles'
import { DetailBlurbs } from './DetailBlurbs.js'

function ProjectDetails({ project, flipCard }) {
    return (
        <>
            {/* blank image to keep the details side the same size as the image side */}
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