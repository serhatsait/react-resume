import React, {Fragment} from 'react'

function Footer() {
  return (
      <Fragment>
        <footer className="footer">
          <div className="container text-center">
            <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/serhat-sait-pekediz-125634141/">
              <i className="fa fa-linkedin fa-2x " aria-hidden="true"></i>
            </a>
            <a className="cc-github btn btn-link " href="https://github.com/serhatsait">
              <i className="fa fa-github fa-2x " aria-hidden="true"></i>
            </a>
          </div>
          <div className="h4 title text-center">Serhat Sait Pekediz</div>
          <div className="text-center text-muted">
            <p>
              &copy; The Masspace. All rights reserved.
            </p>
          </div>
        </footer>
      </Fragment>
  )
}

export default Footer
