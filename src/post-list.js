import React from 'react';
import PostListItem from './post-list-item';

class PostList extends React.Component {
  render() {
    let listItems = this.props.posts.map(post => {
      return <PostListItem key={post.id} post={post}/>
    });

    return (
      this.props.posts.length
        ? (<ul>{listItems}</ul>)
        : <div>No items found</div>
    );
  }
}

export default PostList;