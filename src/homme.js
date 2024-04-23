import BlogList from "./bloglist";
import UseFetch from "./useFeth";

const Homepage = () => {
   const  {data: blogs , isPending , error} = UseFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {isPending && <div>Loading ..</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList myblogs={blogs} title="All Blogs" />}
            {/* <button onClick={()=>setName("Lugi")}>Change Name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Homepage;