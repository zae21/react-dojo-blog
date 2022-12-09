import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const onSubmitHandle = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsLoading(true);

        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(r => {
            return r.json();
        }).then(d=>{
            console.log(d);
            setIsLoading(false);
            history.push(`/blog/${d.id}`);
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        });
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
                {
                    !isLoading ? <button>Add blog</button> : <button disabled>Saving blog ...</button>
                }
                
            </form>
        </div>
    );
}

export default Create;