import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { navigation } from "../../navigation"
import "./Header.css"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
      <Navbar className="navbar" expand="md" >
        <NavbarBrand tag={Link} to="/">
        <FontAwesomeIcon icon={faHotel} className="icon" />
          XpAssist
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="nav-right">
          {
            navigation.right.map(item => {
              return(
                
                  <NavLink tag={Link} to={item.to} className="nav-item">{item.title}</NavLink>
                
              )
            })
          }
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
