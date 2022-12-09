
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const { isLoading, data: blogs, isError} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {isError && <div>{ isError }</div>}
            {isLoading && <div>Loading ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;