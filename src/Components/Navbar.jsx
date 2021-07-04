import { Link } from "react-router-dom";
export const Navbar=()=>{

    return (
        <div className="navbar">
        <h2 >Apparel Store</h2>
       <Link to="cart"> <button className="btn btn-primary">Cart</button></Link>
        </div>
    )
}