import "./Contact.css";

const Contact = (props) => {
    const { user } = props

    return (
        <section className="contact-area min-vh-100 d-flex flex-column align-items-center" id="contact">
            <h3 className="section-title">Contact</h3>
            <div className="container">
                <ul className="contact-content min-vh-100 d-flex justify-content-around align-items-center flex-wrap">
                <li className="text-center">
                    <i className="fa fa-map-marker text-danger"></i>
                    <p>{user.user_address}</p>
                </li>
                <li className="text-center">
                    <i className="fa fa-phone text-danger"></i>
                    <p>{user.user_contact}</p>
                </li>
                <li className="text-center">
                    <i className="fa fa-envelope text-danger"></i>
                    <p>{user.user_primary_email}</p>
                </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact