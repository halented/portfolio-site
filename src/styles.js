const textAlign = 'center'
export const styles = {
    menuBox: {
        padding: '5%',
        paddingTop: '2.5%',
        paddingBottom: '0%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    dropdown: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: 'none'
    },
    menuItem: {
        margin: '0%',
        padding: '0%',
        height: '40%',
    },
    headers: {
        marginTop: '0%',
        backgroundColor: '#9ac6c8ff',
        textAlign,
        fontSize: 'large'
    },
    pageName: {
        fontWeight: '700',
        fontFamily: "'Comfortaa', cursive"
    },
    profileHeader: {
        textAlign,
        fontFamily: "'Comfortaa', cursive"
    },
    infoBody: {
        textAlign,
        fontFamily: "'Courier New', monospace"
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '10%'
    },
    contactBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto'
    },
    contactPoint: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '65%',
        alignItems: 'center'
    }
}