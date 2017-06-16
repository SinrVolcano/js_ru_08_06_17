import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    render() {
        const {article, isOpen, accordionOpen} = this.props
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {accordionOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        console.log(isOpen)
        if (!isOpen) return null
        return (
            <section>
               {article.text}
               <CommentList comments = {article.comments} ref = {this.setCommentsRef}/>
            </section>
        )
    }

}

export default Article