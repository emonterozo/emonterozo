const Navigation = (props) => {
    return (
          <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#ab">
                e.monterozo
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {props.socials.map((social) => (
                    <li className="nav-item ml-4 socials">
                      <a className="nav-link" href={social.social_url} target="_blank">
                        <i
                          className={social.icon_name}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )

}

export default Navigation