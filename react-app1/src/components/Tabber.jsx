import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Tabber extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-Light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Login功能
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  注册
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
