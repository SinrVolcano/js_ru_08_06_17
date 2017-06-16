import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class AccordionWrapComponent extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        console.log(this.props)
        return <OriginalComponent {...this.props} {...this.state} accordionOpen = {this.accordionOpen}/>
    }

    accordionOpen = id => ev => {
        console.log(this.props)
        this.setState({
            openItemId: id
        })
    }
}