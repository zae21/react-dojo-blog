import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchData, createData } from "../stores/blogs";

const Create = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { isLoading, blogs } = useSelector((state) => state.blogs);
    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchData(id));
        }else{
            setTitle("");
            setBody("");
            setAuthor("mario");
        }
    }, [dispatch]);

    const [title, setTitle] = useState((blogs && blogs.title) ?? "");
    const [body, setBody] = useState((blogs && blogs.body) ?? "");
    const [author, setAuthor] = useState((blogs && blogs.author) ?? 'mario');
    const [isCreateLoading, setIsCreateLoading] = useState(isLoading);

    const history = useHistory();

    const onSubmitHandle = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        dispatch(createData({blog, id}));
        
        history.push("/");
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
                    !isCreateLoading ? <button>Add blog</button> : <button disabled>Saving blog ...</button>
                }

            </form>
        </div>
    );
}

export default Create;