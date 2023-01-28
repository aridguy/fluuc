import React from "react";
import Logo from '../../Assets/Fluuc_one_logo.png'

import './Nav.css'

const Nav = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-white">
                <div class="container mt-4">
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars right"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="localhost:3000">
                            <img
                                src={Logo}
                                height="40"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <ul class="navbar-nav me-auto mt-3 mb-lg-0">
                            <li class="nav-item">
                                <p class="nav-link" href="#">Pre-Launch Queue</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" href="#">Services</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" href="#">Blog</p>
                            </li>
                        </ul>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button className="botin">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>


        </div>
    )
}

export default Nav