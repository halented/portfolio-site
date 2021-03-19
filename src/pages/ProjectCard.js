import { useState } from 'react'

// local components
import ProjectDetails from './bones/ProjectDetails'
import ProjectImage from './bones/ProjectImage'

// style
import { styles } from '../styles'

function ProjectCard({ project }) {
    const [showImage, setShowImage] = useState(true)

    const flipCard = () => {
        setShowImage(prev => !prev)
    }
    return (
        <div className='projects'>
            <div style={styles.imageAndDetailsBox}>
                {showImage ?
                    <ProjectImage project={project} flipCard={flipCard} />
                    :
                    <ProjectDetails project={project} flipCard={flipCard} />
                }
            </div>
            <div style={styles.projectName}>
                {project}
            </div>
        </div>
    )
}

export default ProjectCard
