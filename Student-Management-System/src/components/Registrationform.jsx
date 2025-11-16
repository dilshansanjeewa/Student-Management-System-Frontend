export default function Registrationform(){
    return(
        <>
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h3 className="text-center mb-4">Student Registration Form</h3>

                {/* Registration Number */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Registration Number:</label>
                    <span className="ms-2" id="regNo">STU-00123</span>
                </div>

                <form>
                    <div className="row">
                        {/* First Name */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter first name" />
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter last name" />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="mb-3">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" value="Male" id="male" />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" value="Female" id="female" />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>

                    {/* Grade */}
                    <div className="mb-3">
                        <label className="form-label">Grade</label>
                        <select className="form-select">
                            <option disabled>Select Grade</option>
                            {[...Array(13)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea className="form-control" rows="2" placeholder="Enter address"></textarea>
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder="+94xxxxxxxxx" />
                    </div>

                    {/* Buttons */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary px-4">Register</button>
                        <button type="reset" className="btn btn-secondary px-4 ms-2">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}