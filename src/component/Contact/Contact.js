import "./Contact.css";

const Contact = (props) => {
    const { user } = props

    return (
        <section className="contact-area p-5 d-flex flex-column align-items-center" id="contact">
            <h3 className="section-title">Contact</h3>
            <div className="container align-self-center">
                <ul className="contact-content row">
                <li className="text-center col-md">
                    <i className="fa fa-map-marker text-danger"></i>
                    <p>{user.user_address}</p>
                </li>
                <li className="text-center col-md">
                    <i className="fa fa-phone text-danger"></i>
                    <p>{user.user_contact}</p>
                </li>
                <li className="text-center col-md">
                    <i className="fa fa-envelope text-danger"></i>
                    <p>{user.user_primary_email}</p>
                </li>
                </ul>
            </div>
          </section>
    )
}

export default Contact