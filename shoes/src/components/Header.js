import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand m-auto fw-bold " to="/"><img style={{height:'45px',width:'120px', marginLeft:"20px"}} src='/assets/nike.png'></img></NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid d-flex justify-content-end align-items-md-center align-items-sm-center">
                            <li className="nav-item me-md-5">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-md-5">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-md-5">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>
                            
                            <li className="nav-item me-md-5">
                                <NavLink className="nav-link" to="/help">Help</NavLink>
                            </li>
                            <li className="nav-item d-flex flex-row ms-md-5">
                            <li className="nav-item m-2 m-md-0">
                            <Login/>
                            </li>

                            <li className="nav-item m-2 m-md-0">
                            <Signup/>
                            </li>

                            <li className="nav-item m-2 m-md-0">
                            <CartBtn/>
                            </li>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
