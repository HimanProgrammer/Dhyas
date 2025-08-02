import React, { useState } from "react";

const BecomeVolunteerForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        file: null,
        note: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.note) newErrors.note = "Case description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSuccessMessage("Form submitted successfully!");
            setErrorMessage("")
           
        } else {
            setErrorMessage("Please fix the errors in the form.");
            setSuccessMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-validation-active" id="contact-form-main">
            <div className="row">
             
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        name="name"
                        id="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

              
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                        type="text"
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>

                
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                    <label htmlFor="file">Upload Your CV</label>
                    <input
                        id="file"
                        type="file"
                        className="form-control"
                        name="file"
                        onChange={handleChange}
                    />
                    <i className="ti-cloud-up"></i>
                </div>

               
                <div className="col-lg-12 col-12 form-group">
                    <textarea
                        className={`form-control ${errors.note ? "is-invalid" : ""}`}
                        name="note"
                        id="note"
                        placeholder="Case Description..."
                        value={formData.note}
                        onChange={handleChange}
                    />
                    {errors.note && <small className="text-danger">{errors.note}</small>}
                </div>

               
                <div className="submit-area col-lg-12 col-12">
                    <button type="submit" className="theme-btn submit-btn">Send Message</button>
                    {successMessage && <div className="text-success mt-3">{successMessage}</div>}
                    {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
                </div>
            </div>
        </form>
    );
};

export default BecomeVolunteerForm;
