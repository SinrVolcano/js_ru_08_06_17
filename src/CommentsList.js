import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen : false
        }
    }

    render() {
        const {isOpen} = this.state
        const {comments} = this.props
        if ((Array.isArray(comments))) {
            return (
                <div>
                    <button onClick = {this.toggleOpen}>
                        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
                    </button>
                    {this.commenstBody(comments)}                  
                </div>
           )
        }
        else return null
    }

    commenstBody(comments) {
        if (!this.state.isOpen) return null
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <h4>Комментарии</h4>
                <ul>
                    {commentElements}
                </ul>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
