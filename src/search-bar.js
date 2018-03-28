import React from 'react';

class SearchBar extends React.Component {

  handleSearch = (e) => {
    this.props.onSearchChange(e);
  }

  render() {
    return (
      <input type="text" onChange={this.handleSearch} placeholder="Enter search text here..." />
    );
  }
}

export default SearchBar;