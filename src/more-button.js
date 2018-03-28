import React from 'react';

class MoreButton extends React.Component {

  handleLoadMore = (e) => {
    this.props.onLoadMoreClick(e);
  }

  render() {
    return (
      <button onClick={this.handleLoadMore}>Load More</button>
    );
  }
}

export default MoreButton;