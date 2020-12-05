import React from 'react';
import { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[])
return (
<div>
   {
      posts.map(pd => <PostDetails post={pd}></PostDetails> )
   }                      
</div>
);
};

export default Home;