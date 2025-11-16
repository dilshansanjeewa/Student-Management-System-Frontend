export default function Header(){
    return(
        <>
        <div className="container"> 
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
                    <span className="fs-4">Student Management System</span> 
                </a> 
                <ul className="nav nav-pills"> 
                    {/* <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">HOME</a></li>  */}
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">REGISTER</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link">VIEW</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link">UPDATE</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link">Delete</a></li> 
                </ul> 
            </header> 
            </div>
        </>
    )
}