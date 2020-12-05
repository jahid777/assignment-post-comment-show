import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
  const {postId} = useParams();
 
  const [comments, setComments] = useState([])
  console.log(comments);
  const [post, setPost] = useState({})
  const [photo, setPhoto] = useState([])
  console.log(post);
//   console.log(comments);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`) 
    .then(res => res.json())   
    .then(data => setComments(data))

    
    fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
    .then(res => res.json())
    .then(data => setPhoto(data))
  },[])                     
return (
<div>
    

    {
     comments.map(cm => <h1>{cm.name}</h1> )
    }
    <h1>Photo title: {photo.title}</h1> 
    <img src={photo.thumbnailUrl} alt=""/>                
</div>
);
};

export default CommentDetails;