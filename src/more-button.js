import React from 'react';

class MoreButton extends React.Component {

  handleLoadMore = (e) => {
    this.props.onLoadMoreClick(e);
  }

  render() {
    return (
      this.props.show
        ? <button onClick={this.handleLoadMore}>Load More</button>
        : <div>No items left</div>
    );
  }
}

export default MoreButton;