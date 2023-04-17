import React, { useEffect, useState } from 'react'
import  getPosts from '../api/api';

const PostFetchMock = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        const data = async()=> {
            const res = await getPosts();
            setPosts(res);
        };
        data();
    },[])
  return (
    <div className='container py-4'>
        <p className='fs-1 fw-bolder' data-testid="title">Fake Posts List</p>
        <hr />
        {posts.length > 0 ? posts.map((post,index)=> {
            return (
                <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <hr />
                </div>
            )
        }): <p>No Data Founded</p>  }
    </div>
  )
}

export default PostFetchMock