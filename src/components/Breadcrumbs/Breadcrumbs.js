import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
    return (
        <div className="breadcrumbs">
         <span><Link to="/">Home</Link></span><span> / </span><span><Link to={props.url}>{props.link}</Link></span>
        </div>
    )
}

export default Breadcrumbs;