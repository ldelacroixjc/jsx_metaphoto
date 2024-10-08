import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';

const NavigationBar = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    return (
        <>
            <Navbar fixed='top' expand='sm' className='header-nav'>
                <NavbarBrand href="/">MetaPhoto</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" pills>
                        <NavItem onClick={props.onFilter} className='menu-item'>
                            <Button><i class="fi fi-rr-settings-sliders"></i> Filtros</Button>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>Fotos por Pagina: {props.limit}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem 
                                        onClick={() => props.onChangeLimit(5)}
                                    >5</DropdownItem>
                                    <DropdownItem 
                                        onClick={() => props.onChangeLimit(10)}
                                    >10</DropdownItem>
                                    <DropdownItem
                                        onClick={() => props.onChangeLimit(15)}
                                    >15</DropdownItem>
                                    <DropdownItem 
                                        onClick={() => props.onChangeLimit(20)}
                                    >20</DropdownItem>
                                    <DropdownItem 
                                        onClick={() => props.onChangeLimit(25)}
                                    >25</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
    </>
  );
}

export default NavigationBar;