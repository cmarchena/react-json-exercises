import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    /* fetch('https://www.reddit.com/r/reactjs.json')
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    }); */
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts.data.children }));
  }
  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.data.id}>
              <a href={`http://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
              <p>
                Score: {post.data.score} | Author: {post.data.author}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
