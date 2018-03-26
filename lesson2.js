const React = {
  createElement: function(tagName, props, children) {
    let tag = document.createElement(tagName);

    if (props !== undefined) {
      if (props.style) {
        for (let style in props.style) {
          tag.style[style] = props.style[style];
        }
      } else if (props.textContent) {
        tag.textContent = props.textContent;
      }
    }

    if (children !== undefined) {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          tag.appendChild(child);
        });
      } else if (typeof children === 'string') {
        tag.appendChild(document.createTextNode(children));
      }
    }


    return tag;
  },
  render: function (app, rootElm) {
    rootElm.appendChild(app);
  }
};

const app = React.createElement('div', { style: { backgroundColor: 'red'} }, [
  React.createElement('span', undefined, 'Hello World!'),
  React.createElement('br'),
  'This is just a text node',
  React.createElement('div', { textContent: 'Text content'})
]);

React.render(
  app,
  document.getElementById('root')
);