import ReactQuill from "react-quill-new"

export default function Editor({value, onChange}){
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    }
    
    return(
        <ReactQuill 
            value={value}
            theme={"snow"}
            onChange={onChange}
            modules={modules}
        />
    )
}