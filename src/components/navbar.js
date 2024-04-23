import { Link } from "react-router-dom";

const Navabr = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Homme</Link>
                <Link to="/Create">New Blog</Link>
                
            </div>
        </nav>
     );
}
 
export default Navabr;