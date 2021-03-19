// local components
import HeaderCustom from './bones/HeaderCustom'
import ProjectCard from './ProjectCard'

// style
import { Card } from 'antd'
import { styles } from '../styles'

// other
import { useEffect } from 'react'
import gsap from 'gsap'

const projects = ["Finally", "DnDLuxe", "Twitflip"]

function Projects() {
    useEffect(() => {
        // animate project cards
        gsap.from('.projects', { duration: 1, y: -100, opacity: 0, stagger: .19 })
    }, [])
    return (
        <>
            <HeaderCustom pageName='projects' />
            <Card style={styles.projectBox}>
                {projects.map(project => <ProjectCard project={project} key={project} />)}
            </Card>
        </>
    )
}

export default Projects