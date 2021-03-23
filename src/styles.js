const centeredText = { textAlign: 'center' }

const verticalBox = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}

export const styles = {
    btnStyle: {
        backgroundColor: '#9ac6c8ff',
        fontWeight: 'bold',
        marginTop: '10%',
        width: '100%',
        textAlign: 'center'
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '5%'
    },
    contactBox: {
        ...verticalBox
    },
    contactDetail: {
        fontSize: 25,
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    contactIcon: {
        fontSize: 50,
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8%'
    },
    contactPoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%'
    },
    dogPic: {
        width: '50%',
        padding: '1%',
        borderRadius: '10px',
        transition: 'transform .3s'
    },
    dropdown: {
        ...verticalBox,
        border: 'none'
    },
    equalWidth: {
        width: '28%'
    },
    headers: {
        marginTop: '0%',
        backgroundColor: '#9ac6c8ff',
        ...centeredText,
        fontSize: 20
    },
    imageAndDetailsBox: {
        ...verticalBox,
        marginTop: '3%'
    },
    infoBody: {
        ...centeredText,
        fontFamily: "'Courier New', monospace"
    },
    logo: {
        zIndex: -1,
        position: 'absolute',
        bottom: -100,
        opacity: 0,
        maxWidth: '10%'
    },
    menuBox: {
        padding: '5%',
        paddingTop: '2.5%',
        paddingBottom: '0%',
        ...verticalBox
    },
    menuItem: {
        margin: '0%',
        padding: '0%',
        height: '40%',
    },
    pageName: {
        fontWeight: '700',
        fontFamily: "'Comfortaa', cursive"
    },
    profileHeader: {
        ...centeredText,
        fontFamily: "'Comfortaa', cursive"
    },
    projectBlurb: {
        position: "absolute",
        padding: '5%',
        overflow: 'scroll',
        maxWidth: '80%',
        maxHeight: '80%'
    },
    projectBox: {
        ...verticalBox,
        width: '100%'
    },
    projectDetails: {
        ...verticalBox,
        width: '51%'
    },
    projectImage: {
        width: '50%',
        // height: '46vh'
    },
    projectName: {
        ...verticalBox,
        fontSize: 25
    }
}