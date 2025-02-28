/* This component is used for header or navbar 
To give Navigation links do the following steps.
1)-  import links from react-router-dom using command: import { Link } from 'react-router-dom';
2)- Now replace the anchor tag i.e <a></a> with <Link></Link> and href with  to. 
Eg-      <Link className="nav-link active" aria-current="page" to="/home"> <h5>Home</h5></Link>
Eg2-   <Link className="navbar-brand" to="/" class="text-warning bg-dark"> <h3>Student Bazaar </h3> </Link>

*/
import { Link } from 'react-router-dom';
function Navbar(){
    return(<>
<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" class="text-warning bg-dark"> <h3>Student Bazaar </h3> </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul  className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home"> <h5>Home</h5></Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/add-item"> <h5>AddPaidItem</h5></Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/aboutus"> <h5>AboutUs</h5></Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/contact-us"> <h5>ContactUs</h5></Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/show-item"> <h5>ShowItem</h5></Link>
        </li>
        <li className="nav-item dropdown">
        <a  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>




    
    </>)
}

export default Navbar;
