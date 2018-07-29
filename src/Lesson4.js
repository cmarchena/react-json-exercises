import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };
  // Async await syntax
  componentDidMount() {
    const data = async () => {
      const res = await fetch('https://www.reddit.com/r/reactjs.json');
      const posts = await res.json();
      console.log(posts);
      this.setState({
        posts: posts.data.children
      });
    };
    data();
  }
  /*  componentDidMount() {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts.data.children }));
  } */
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
