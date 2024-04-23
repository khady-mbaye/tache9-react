import { useParams } from "react-router-dom";
import UseFetch from "./useFeth";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog , isPending , error} = UseFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div>
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {
            blog && <article>
                <h2>{blog.title}</h2>
                <h3>Write by {blog.auteur}</h3>
                <p>{blog.body}</p>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;