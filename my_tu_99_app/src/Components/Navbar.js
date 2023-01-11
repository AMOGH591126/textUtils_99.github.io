import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
            <div className="container-fluid">
                <h1
                    className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} style={{ fontSize: '20px' }}
                >
                    {props.title}
                </h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                    </ul>
                    <button type="button" class={`btn btn-${props.mode === 'dark' ? 'secondary' : 'light'} border-secondary`} onClick={props.toggleMode}>Dark Mode</button>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
