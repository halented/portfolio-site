import { Layout } from 'antd'
import { styles } from '../../styles'
const { Header } = Layout

function HeaderCustom({ pageName }) {
    return (
        <Header style={styles.headers}>
            {/* in order to make this look like the mockup, gonna need to separate these into different elements */}
            <span style={styles.pageName}>{pageName}</span> | hal dunn
        </Header>
    )
}

export default HeaderCustom
