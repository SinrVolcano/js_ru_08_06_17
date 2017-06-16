import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    
    render() {
        const {accordionOpen, article, openItemId} = this.props;
        console.log(openItemId)
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                accordionOpen = {accordionOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList);