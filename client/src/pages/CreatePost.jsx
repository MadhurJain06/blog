import { useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
    ]
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
]

export default function CreatePost() {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
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
        })
        console.log(await response.json());
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
            <ReactQuill value={content}
                onChange={(value) => setContent(value)}
                modules={modules}
                formats={formats}
            />
            <button style={{ marginTop: '10px' }}>Create Post</button>
        </form>
    )
}