import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchData, deleteData } from "../stores/blogs";

const BlogDetail = () => {

    const { id } = useParams();
    const { isLoading, blogs: blog, isError } = useSelector((state) => state.blogs);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(id));
    }, [dispatch]);


    const onDeleteHandle = () => {
        dispatch(deleteData(id));
        history.push('/');
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
                        <Link to={`/update/${blog.id}`}>Edit Blog</Link>
                    </article>
                )
            }
        </div>
    );
}

export default BlogDetail;