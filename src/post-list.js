import React from 'react';
import PostListItem from './post-list-item';

class PostList extends React.Component {
  render() {
    let listItems = this.props.posts.map(post => {
      return <PostListItem key={post.id} post={post}/>
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default PostList;