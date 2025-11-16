export default function Deleteform() {
    return (
        <>
            <div class="container mt-5">
                <div class="card shadow-lg p-4">
                    <h3 class="text-center mb-4 text-danger">Delete Student</h3>

                    <form>

                        {/* Registration Number */}
                        <div className="mb-4">
                            <label className="form-label fw-bold">Enter Registration Number</label>
                            <input type="text" className="form-control" placeholder="Enter Reg No (ex: STU-00123)" />
                        </div>

                        <hr />

                        <h5 class="fw-bold mb-3">Student Details</h5>

                        {/* <!-- Student Information (Labels only) --> */}
                        <div class="mb-3">
                            <label class="form-label fw-bold">First Name:</label>
                            <span class="ms-2" id="lblFullName">N/A</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Last Name:</label>
                            <span class="ms-2" id="lblLastName">N/A</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Gender:</label>
                            <span class="ms-2" id="lblGender">N/A</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Grade:</label>
                            <span class="ms-2" id="lblGrade">N/A</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Address:</label>
                            <span class="ms-2" id="lblAddress">N/A</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Mobile Number:</label>
                            <span class="ms-2" id="lblMobile">N/A</span>
                        </div>

                        {/* <!-- Buttons --> */}
                        <div class="text-center mt-4">
                            <button type="button" class="btn btn-danger px-4">Delete Student</button>
                            <button type="reset" class="btn btn-secondary px-4 ms-2">Clear</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}