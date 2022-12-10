
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import { fetchData } from '../stores/blogs';

const Home = () => {
    // const { isLoading, data: blogs, isError} = useFetch("http://localhost:8000/blogs");
    const { isLoading, blogs, isError } = useSelector((state) => state.blog);
    const dispatch = useDispatch();


    return (
        <div className="home">
            {isError && <div>{isError}</div>}
            {isLoading && <div>Loading ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;