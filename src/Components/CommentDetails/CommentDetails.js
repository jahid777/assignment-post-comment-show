import { Avatar } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CommentDetails/CommentDetails.css';

const CommentDetails = () => {
  const {postId} = useParams();
 
  const [comments, setComments] = useState([]);
  // console.log(comments);
 
  const [image, setImage] = useState([]);


 
//   console.log(comments);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`) 
    .then(res => res.json())   
    .then(data => setComments(data))

    
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => {
      setImage(data.results)
      console.log(data.results);
    }) //jehetu data tar por ar vitore result ase and ata 10tay ase sehetu index[0] set korer kono dorkar nay..
  },[]);

  

  let pictures = [];
  for (let i = 0; i < image.length; i++) {
    const item = image[i];
    const pics = item.picture
    const largePicture = pics.large
    pictures.push(largePicture) 
}

return (
  <div style={{margin: '30px'}}>
  <h1> Comments:</h1>

  {
      comments.map((comment,idx) => //akhne useState ar index number ek sathe pathano hoise ar index number  pathano hoise ortht 2ta perametar..
      
          <div>
              <div  className="comment__top">
                  <Avatar alt="MIF" src={pictures[idx]} />
                  <h3> {comment.name} </h3>
              </div>
              <p style={{color:"#880e4f"}}> Post Id: {comment.postId} </p>
              <p> Email: {comment.email} </p>
              <p>{comment.body}</p>
          </div>
      )
  }
</div>
    // <div>
    //   <h1>comments</h1>
    //   {
    //       comments.map((comments, idx)=>
    //       <div>
    //         <div>
    //         <Avatar alt="" src={pictures}>
    //         </div>
    //       </div>
    //       )
    //   }

    // </div>
);
};

export default CommentDetails;