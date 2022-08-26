import {NavLink} from "react-router-dom"

function Nav() {
  
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create-task">Add to list</NavLink>
        </nav>
    )
}

export default Nav