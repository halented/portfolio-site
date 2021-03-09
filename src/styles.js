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
        fontSize: 20
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
        flexDirection: 'column'
    },
    contactPoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    contactIcon: {
        fontSize: 50,
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8%'
    },
    contactDetail: {
        fontSize: 25,
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start'
    }
}