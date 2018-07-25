import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import _ from 'lodash'

class PostsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts () {
        return _.map(this.props.posts, post => {
            return (
                <li className="lit-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts Index</h3>

                <ul className="list-group">
                    {this.renderPosts()}
                </ul>



            </div>
        )
    }
}


function msp(state) {
    return {posts: state.posts}
}

export default connect(msp, { fetchPosts })(PostsIndex)