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
    return (
        <img src={imagesMap[[project]]} style={styles.projectImage} className='projectImage' onClick={flipCard} />
    )
}

export default ProjectImage
