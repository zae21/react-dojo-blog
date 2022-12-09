import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {

    const { id } = useParams();
    const { isLoading, data: blog, isError } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const onDeleteHandle = () => {
        fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" })
            .then(r => {
                return r.json();
            })
            .then(d => {
                console.log(d);
                history.push('/');
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="blog-detail">
            {isError && <div>{isError}</div>}
            {isLoading && <div>Loading ....</div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={onDeleteHandle}>Delete Blog</button>
                    </article>
                )
            }
        </div>
    );
}

export default BlogDetail;