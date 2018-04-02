import React from 'react';
import {Button, Icon} from 'react-materialize'

class MoreButton extends React.Component {

  handleLoadMore = (e) => {
    this.props.onLoadMoreClick(e);
  }

  render() {
    return (
      this.props.show
        ? <Button waves='light' onClick={this.handleLoadMore}>Load More<Icon left>autorenew</Icon></Button>
        : <div>No items left</div>
    );
  }
}

export default MoreButton;