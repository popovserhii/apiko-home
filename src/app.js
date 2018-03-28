import React from 'react';
import PostList from './post-list';
import MoreButton from './more-button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: props.posts.slice(0, 10)};
  }

  handleLoadMoreClick = (e) => {
    e.preventDefault();
    if (this.state.posts.length === this.props.posts.length) {
      return; // skip re-render if all posts are shown
    }
    this.setState((prevState) => ({
        posts : this.props.posts.slice(0, prevState.posts.length + 10)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="content">
          <PostList posts={this.state.posts} />
          <MoreButton onLoadMoreClick={this.handleLoadMoreClick} />
        </div>
      </div>
    );
  }
}

export default App;
