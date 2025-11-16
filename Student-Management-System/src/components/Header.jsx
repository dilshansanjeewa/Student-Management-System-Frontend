import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <div className="container"> 
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
                    <span className="fs-4">Student Management System</span> 
                </a> 
                <ul className="nav nav-pills"> 
                    <li className="nav-item"> <Link to='/Register' className="nav-link active" aria-current="page">REGISTER</Link></li> 
                    <li className="nav-item"><Link to='/' href="#" className="nav-link">VIEW</Link></li> 
                    <li className="nav-item"><Link to='/Update' href="#" className="nav-link">UPDATE</Link></li> 
                    <li className="nav-item"><Link to='/Delete' href="#" className="nav-link">Delete</Link></li> 
                </ul> 
            </header> 
            </div>
        </>
    )
}