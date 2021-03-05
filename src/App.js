import './App.css'
import SiteMenu from './SiteMenu'
import { Contact, DogPics, Profile, Projects } from './pages/bundler'
import { HashRouter, Route } from 'react-router-dom';


function App() {
    return (
        <HashRouter basename='/'>
            <SiteMenu />
            <div>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Profile} />
                <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
                <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                <Route path={process.env.PUBLIC_URL + '/dog-pics'} component={DogPics} />
            </div>
        </HashRouter>
    )
}

export default App
