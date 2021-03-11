// local components
import HeaderCustom from './bones/HeaderCustom'
import DogDetail from './bones/DogDetail'
import { dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9 } from '../images/dog-pics/bundler'

// style
import { Card } from 'antd'

const dogPics = [
    { path: 'Bn2FgpOB0xL/', image: dog1 },
    { path: 'BbXUoRmAb6S/', image: dog2 },
    { path: 'BZytMgggbbn/', image: dog3 },
    { path: 'BzWeFB4HVph/', image: dog4 },
    { path: 'BxVxSdyBopD/', image: dog5 },
    { path: 'Br3X2fvhHPs/', image: dog6 },
    { path: 'BrF--SZhin_/', image: dog7 },
    { path: 'Bl1ZlswBtJm/', image: dog8 },
    { path: 'CDsBIJ9JCQl/', image: dog9 },
]


function DogPics() {

    const instaOpen = (path) => {
        window.open(`https://www.instagram.com/p/${path}`, '_blank')
    }

    return (
        <>
            <HeaderCustom pageName='dog pics' />
            <Card data-testid='dog-card'>
                {dogPics.map(pic => <DogDetail dog={pic} instaOpen={instaOpen} key={pic.path} />)}
            </Card>
        </>
    )
}


export default DogPics