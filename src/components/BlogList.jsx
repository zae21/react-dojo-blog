import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b) => (
                <div className="blog-preview" key={b.id}>
                    <Link to={`/blog/${b.id}`}>
                        <h2>{b.title}</h2>
                        <p>written by {b.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;