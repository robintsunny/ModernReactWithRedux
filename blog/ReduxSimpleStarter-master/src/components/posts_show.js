import React from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions'

import { Link } from 'react-router-dom'

class PostsShow extends React.Component {
    componentDidMount () {
        this.props.fetchPost(this.props.match.params.id)
    }
    
    onDeleteClick () {
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }


    render () {

        
        if (!this.props.post) {
            return (
                <div>LIL BITCHHHH</div>
            )
        } else {
            const {post} = this.props
            return (
                <div>
                <Link to='/'>POSTS</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>

                <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this)}>DELETE</button>
            </div>
            )    
        }
        
    }
}


function msp (state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]    
    }
}

export default connect(msp, { fetchPost, deletePost })(PostsShow)