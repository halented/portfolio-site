// local components
import HeaderCustom from './bones/HeaderCustom'
import ProjectCard from './ProjectCard'

// style
import { Card } from 'antd'
import { styles } from '../styles'

const projects = ["finally", "dndluxe", "twitflip"]

function Projects() {
    return (
        <>
            <HeaderCustom pageName='projects' />
            <Card style={styles.projectBox}>
                {projects.map(project => <ProjectCard project={project} />)}
            </Card>
        </>
    )
}

export default Projects