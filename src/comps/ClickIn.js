import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router'

class ClickIn extends Component {

    routerFix = () => {
        this.props.history.push(`/home`)
    }

    render() {
        return (
            <>
                <h1 id='opener'>Hi there!</h1>
                <Button id='homeLink' onClick={this.routerFix}>
                    Enter Site
                </Button>
            </>
        )
    }
}

export default withRouter(ClickIn); 