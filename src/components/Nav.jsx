


import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
        <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/library">
        <div>Real Estate Investor's Library</div>
      </Link>
      
    </div>
  );
}
