import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import './header.scss'

const HeaderComponent = () => {
    return (
        <Navbar expand="md" className="navbar-header p-0">
            <NavbarBrand className="p-0" href="/">
                <img src={process.env.PUBLIC_URL + '/images/techhub.png'} alt='Knoldus' height="60" />
            </NavbarBrand>
        </Navbar>
    );
}
export default HeaderComponent;