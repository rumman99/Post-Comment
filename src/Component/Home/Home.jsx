import axios from 'axios';
import { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [post, setPost]= useState([]);
    useEffect(()=>{
        const fetch= (async()=>{
            const res= await axios("https://jsonplaceholder.typicode.com/posts")
            setPost(res.data);
        })()
    },[])

    return (
        <div>
            {/* <img src={image} alt="" /> */}
            {
                post.map(posts=> <Posts post={posts}></Posts>)
            }
        </div>
    );
};

export default Home;