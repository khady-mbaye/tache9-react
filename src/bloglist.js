import { Link } from "react-router-dom";

const BlogList = ({ myblogs, title }) => {

    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
                myblogs.map(blog => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/myblogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>{blog.auteur}</p>
                        </Link>

                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;