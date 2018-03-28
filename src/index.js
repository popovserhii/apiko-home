import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import posts from './data-posts.json';

ReactDOM.render(
  <App posts={posts} />,
  document.getElementById('root')
);