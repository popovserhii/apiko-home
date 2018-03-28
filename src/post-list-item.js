import React from 'react';

class PostListItem extends React.Component {
  render() {
    let post = this.props.post;

    return (
      <li>{post.title}</li>
    );
  }
}

export default PostListItem;