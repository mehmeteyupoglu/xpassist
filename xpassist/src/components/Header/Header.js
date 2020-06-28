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
  NavbarText
} from 'reactstrap';
import styled from "styled-components"
import { Link } from "react-router-dom"
import { navigation } from "../../navigation"
import "./Header.css"

const StyledNav = styled.div`


`

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
    <StyledNav>
      <Navbar className="navbar" expand="md" >
        <NavbarBrand tag={Link} to="/">
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
    </StyledNav>
    </div>
  );
}

export default Header;
