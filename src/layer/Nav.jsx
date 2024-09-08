import { Link } from "react-router-dom";

export function Nav(){

    return (
        <nav>
           
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/product/add">AddProduct</Link></li>
                
             </menu>
          
           
        </nav>
    )
}