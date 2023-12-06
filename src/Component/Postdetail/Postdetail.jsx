import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from '../Comments/Comments';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const Postdetail = () => {
    const {id}= useParams();
    const [post, setPost]= useState([])
    useEffect(()=>{
        const fetch= (async()=>{
            const res= await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(res.data);
        })()
    }, [])

    const [comments, setComments]= useState([])
    useEffect(()=>{
        const fetch= (async()=>{
            const res= await axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            setComments(res.data);
        })()
        console.log(comments);
    }, [])

    return (
        <div> 
        <div className='flex justify-center mt-6 text-red-600 border border-2 border-yellow-900 mx-24'>
        <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button >
        <ListItemText primary={`Details of Id: ${id}`} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={`Title: ${post.title}`} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary={post.body} />
      </ListItem>
      <Divider light />
    </List>
    </div>

    <div>
    {
        comments.map(comment=> <Comments comment={comment} postid={id}></Comments>)
    }
    </div>
    </div>
    );
};

export default Postdetail;