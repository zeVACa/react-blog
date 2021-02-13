import React, { useState, useEffect } from 'react';

// import data from './data.json';

function App() {
  console.log('App was rendered');

  const [posts, setPosts] = useState([]);

  console.log(posts);

  const delay = (seconds) => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        console.log(`timeouted after ${seconds} secons`);
      }, seconds * 1000);
    });
  };

  delay(2);

  useEffect(() => {
    fetch('https://5c3755177820ff0014d92711.mockapi.io/posts').then((res) => {
      res.json().then((result) => {
        setPosts(result);
      });
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <img src={post.image} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
