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
        marginTop: '10%'
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
        maxHeight: '25%'
    },
    dogPic: {
        width: '50%',
        padding: '1%',
        borderRadius: '10px',
        transition: 'transform .3s'
    },
    baseCss: ".__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n};data-react-tooltip: true;\n}"
}