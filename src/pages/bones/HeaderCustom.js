import { Layout } from 'antd'
import { styles } from '../../styles'
const { Header } = Layout

function HeaderCustom({ pageName }) {
    return (
        <Header style={styles.headers}>
            <span style={styles.pageName}>{pageName}</span> | hal dunn
        </Header>
    )
}

export default HeaderCustom
