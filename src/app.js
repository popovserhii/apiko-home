import React from 'react';
import PostList from './post-list';
import MoreButton from './more-button';
import SearchBar from './search-bar';
import fetchData from './fetch-data';

class App extends React.Component {
  itemsPerGroup = 5;

  constructor(props) {
    super(props);

    this.posts = [];
    this.state = {
      posts: [],
      isLoading: true
    };
  }

  handleLoadMoreClick = (e) => {
    e.preventDefault();
    let posts = this.getWorkingPosts();
    this.setState((prevState) => ({
        posts: posts.slice(0, prevState.posts.length + this.itemsPerGroup)
    }));
  }

  handleSearchChange = (e) => {
    let value = e.target.value;
    this.hasFilter = value.length > 0;
    this.filtered = this.posts.filter(post => post.title.startsWith(value));
    this.setState({
      posts: this.filtered.slice(0, this.itemsPerGroup)
    });
  }

  getWorkingPosts = () => {
    return this.hasFilter ? this.filtered : this.posts;
  }

  havePostsLeft = () => {
    return !(this.state.posts.length === this.getWorkingPosts().length);
  }

  async componentDidMount() {
    this.posts = await fetchData('posts');

    setTimeout(() => {
      this.setState({
        posts: this.posts.slice(0, this.itemsPerGroup),
        isLoading: false
      });
    }, 2000);
  }

  render() {
    let {posts, isLoading} = this.state;

    if (isLoading) {
      return <h3>Loading...</h3>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="content">
          <SearchBar onSearchChange={this.handleSearchChange} />
          <PostList posts={posts} />
          <MoreButton show={this.havePostsLeft()} onLoadMoreClick={this.handleLoadMoreClick} />
        </div>
      </div>
    );
  }
}

export default App;
