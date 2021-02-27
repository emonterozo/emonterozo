import { useRef } from 'react';

const Footer = (props) => {
    const { user, isAlertVisible, alert, isSending, send } = props
    const name = useRef(null)
    const email = useRef(null)
    const message = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()
        const data = {
          name: name.current.value,
          email: email.current.value,
          message: message.current.value
        }
        send(data)
    }
    return (
        <footer className="bg-dark text-white">
        <div className="container-fluid p-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="text-center">Thank you for visiting!</h3>
              <h5 className="text-center text-warning">Design & Developed
              
              by {`${user.user_firstname} ${user.user_lastname}`}</h5>
            </div>
            <div className="col-md-6">
            {
              isAlertVisible &&
                alert()
            }
            <form onSubmit={sendEmail}>
            <div className="input-group mb-2">
            <input ref={name} className="form-control mr-2" type="text" placeholder="Your Name"  maxLength="30" required />
            <input ref={email} className="form-control ml-2" type="email" placeholder="Your Email" maxLength="30" required />
            </div>
            <textarea
            className="form-control"
            ref={message}
            placeholder="Your Message"
            required
            rows="4" />
            {
              isSending ?  <button className="btn btn-primary btn-block p-2 mt-2" type="button">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span className="sr-only">Loading...</span> </button> :
               <button type="submit" className="btn btn-primary btn-block p-2 mt-2"><i className="fa fa-envelope"></i> Send Message</button>
            }
            </form>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer