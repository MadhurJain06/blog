import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/posts/${id}`).
        then(response=>{
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            });
        });
    },[])

    if(!postInfo) return '';
    return(
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <p className="info">
                <div className="author">by @{postInfo.author.username}</div>
                <time>{(new Date(postInfo.createdAt)).toLocaleString()}</time>
            </p>           
            <div className="image">
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <div className="content"
            dangerouslySetInnerHTML={{__html:postInfo.content}}>

            </div>
        </div>
    )
}