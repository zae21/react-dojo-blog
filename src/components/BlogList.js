
const BlogList = ({ blogs, title, handleOnDelete }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b) => (
                <div className="blog-preview" key={b.id}>
                    <h2>{b.title}</h2>
                    <p>written by {b.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;