import { useState } from 'react'

// local components
import ProjectDetails from './bones/ProjectDetails'
import ProjectImage from './bones/ProjectImage'

// style
import { styles } from '../styles'

function ProjectCard({ project }) {
    const [showImage, setShowImage] = useState(true)
    return (
        <div style={styles.projectCard}>
            <div onClick={() => setShowImage(prev => !prev)} >
                {showImage ?
                    <ProjectImage />
                    :
                    <ProjectDetails />
                }
            </div>
        </div>
    )
}

export default ProjectCard
