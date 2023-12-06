import fakeData from '../../fakeData/MOCK_DATA .json'
import { useEffect, useState } from "react";

const Comments = (props) => {
    const [user, setUser]= useState(fakeData)
    const {name, email, body, id}= props.comment;
        
    return (
        <div className='m-10 p-4 border-4 border-dotted border-blue-700'>
            <img src={user[1].Image1} />
            <h1><span className='font-bold text-cyan-500'>Post ID:</span> {props.postid}</h1>
            <h1><span className='font-bold text-cyan-500'>Comment No:</span> {id}</h1>
            <h1><span className='font-bold text-cyan-500'>Name:</span> {name}</h1>
            <h1><span className='font-bold text-cyan-500'>Email:</span> {email}</h1>
            <p><span className='font-bold text-cyan-500'>Comments:</span> {body}</p>
        </div>
    );
};

export default Comments;