import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const onSubmitHandle = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={onSubmitHandle}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create;