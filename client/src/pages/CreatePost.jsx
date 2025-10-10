import { useState } from "react";
import 'react-quill-new/dist/quill.snow.css';
import { Navigate } from "react-router-dom";
import Editor from "../Editor";


export default function CreatePost() {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [files, setFiles] = useState(null);

    async function createNewPost(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('files', files[0]);

        console.log(files);
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials:'include',
        })
        if(response.ok){
            setRedirect(true);
        }
    }

    if (redirect){
        return <Navigate to={'/'}/> 
    }
    return (
        <form onSubmit={createNewPost}>
            <input type="title" placeholder="Title"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)} />
            <input type="summary" placeholder="Summary"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)} />
            <input type="file"
                onChange={(e) => setFiles(e.target.files)} />
            <Editor value={content} onChange={setContent}/>
            <button style={{ marginTop: '10px' }}>Create Post</button>
        </form>
    )
}