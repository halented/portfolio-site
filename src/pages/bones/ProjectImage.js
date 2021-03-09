import DnDLuxe from '../../images/dndluxe.png'
import Twitflip from '../../images/twitflip.png'
import Finally from '../../images/finally.png'
import { styles } from '../../styles'

const imagesMap = {
    "Twitflip": Twitflip,
    "DnDLuxe": DnDLuxe,
    "Finally": Finally
}

function ProjectImage({ project, flipCard }) {
    const alt = `screenshot of ${project} project`
    return (
        <img
            src={imagesMap[[project]]}
            style={styles.projectImage}
            className='projectImage'
            onClick={flipCard}
            alt={alt} />
    )
}

export default ProjectImage
