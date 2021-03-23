const centeredText = { textAlign: 'center' }

const verticalBox = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}

export const styles = {
    menuBox: {
        padding: '5%',
        paddingTop: '2.5%',
        paddingBottom: '0%',
        ...verticalBox
    },
    dropdown: {
        ...verticalBox,
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
        ...centeredText,
        fontSize: 20
    },
    pageName: {
        fontWeight: '700',
        fontFamily: "'Comfortaa', cursive"
    },
    profileHeader: {
        ...centeredText,
        fontFamily: "'Comfortaa', cursive"
    },
    infoBody: {
        ...centeredText,
        fontFamily: "'Courier New', monospace"
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '5%'
    },
    btnStyle: {
        backgroundColor: '#9ac6c8ff',
        fontWeight: 'bold',
        marginTop: '10%'
    },
    logo: {
        width: '20%'
    },
    contactBox: {
        ...verticalBox
    },
    contactPoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%'
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
    },
    projectBox: {
        ...verticalBox,
        width: '100%'
    },
    imageAndDetailsBox: {
        ...verticalBox,
        marginTop: '3%'
    },
    projectName: {
        ...verticalBox,
        fontSize: 25
    },
    projectImage: {
        width: '50%',
        // height: '46vh'
    },
    projectDetails: {
        ...verticalBox,
        width: '51%'
    },
    projectBlurb: {
        position: "absolute",
        padding: '5%',
        overflow: 'scroll',
        maxWidth: '80%',
        maxHeight: '80%'
    },
    dogPic: {
        width: '50%',
        padding: '1%',
        borderRadius: '10px',
        transition: 'transform .3s'
    }
}