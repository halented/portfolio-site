import { styles } from '../../styles'

function DogDetail({ dog, instaOpen }) {
    return (
        <img onClick={() => instaOpen(dog.path)} src={dog.image} alt='instagram of my dogs/me' style={styles.dogPic} className='dogPic'></img>
    )
}

export default DogDetail
