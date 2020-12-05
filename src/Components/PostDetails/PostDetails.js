import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
        root: {
        maxWidth: 345,
        },
           media: {
           height: 140,
         },
     });
                       
   


const PostDetails = (props) => {
  const {title, body, id} = props.post;                       
  const classes = useStyles();
return (
<div>
<Card className={classes.root}  style={{backgroundColor:'black', color: 'white', margin: 'auto',marginBottom: '50px'}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            ID: {id}  <br/>                     
            TITLE :{title}
          </Typography>
          <Typography variant="body2" color="white" component="h3">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <Link style={{textDecoration: 'none'}} to = {`/post/${id}`}> 
            <Button variant="contained" color="secondary">
              SEE COMMENTS
            </Button>
         </Link>
      </CardActions>
    </Card>                       
</div>
);
};

export default PostDetails;
