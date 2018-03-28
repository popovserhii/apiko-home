import React from 'react';
import PostList from './post-list';
import MoreButton from './more-button';
import SearchBar from './search-bar';

const ITEMS_PER_GROUP = 5;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: props.posts.slice(0, ITEMS_PER_GROUP)};
  }

  handleLoadMoreClick = (e) => {
    e.preventDefault();
    let posts = this.getWorkingPosts();
    this.setState((prevState) => ({
        posts: posts.slice(0, prevState.posts.length + ITEMS_PER_GROUP)
    }));
  }

  handleSearchChange = (e) => {
    let value = e.target.value;
    this.hasFilter = value.length > 0;
    this.filtered = this.props.posts.filter(post => post.title.startsWith(value));
    this.setState({
      posts: this.filtered.slice(0, ITEMS_PER_GROUP)
    });
  }

  getWorkingPosts() {
    return this.hasFilter ? this.filtered : this.props.posts;
  }

  havePostsLeft() {
    return !(this.state.posts.length === this.getWorkingPosts().length);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="content">
          <SearchBar onSearchChange={this.handleSearchChange} />
          <PostList posts={this.state.posts} />
          <MoreButton show={this.havePostsLeft()} onLoadMoreClick={this.handleLoadMoreClick} />
        </div>
      </div>
    );
  }
}

export default App;
