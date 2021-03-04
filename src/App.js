import './App.css'
import SiteMenu from './SiteMenu'
import Layout from 'antd'
const { Header } = Layout


function App() {
    return (
        <Layout>
            <Header>
                <SiteMenu />
            </Header>
        </Layout>
    )
}

export default App
