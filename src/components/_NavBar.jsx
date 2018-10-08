import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default class _NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    render() {
        return (
            <Navbar className="navbar-custom "dark="true" expand="lg" fixed="top">
                <Container>
                    <NavbarBrand href="/" className="">START REACTSTRAP</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="" navbar>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-NavLink" href="/#">SIGN UP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-NavLink" href="/#">LOG IN</NavLink>
                            </NavItem>
                            </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

