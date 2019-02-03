import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import CustomLink from "../CustomLink";

export default class NavbarTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className="main-header">
        <Navbar className="header-nav" expand="lg">
          <div className="container container-large">
            <NavbarBrand href="/">
              <img className="light-logo" src={this.props.data.logoImage.image} alt={this.props.data.logoImage.imageAlt}/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} >
              <span></span>
              <span></span>
              <span></span>
            </NavbarToggler>

            {this.props.data.menuItems.length > 0 && (
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {this.props.data.menuItems.map(menuItem => (
                  <NavItem key={menuItem.linkURL}>
                  <CustomLink
                    linkType={menuItem.linkType}
                    linkURL={menuItem.linkURL}
                    className="nav-link"
                    >
                      {menuItem.label}
                    </CustomLink> 
                  </NavItem>
                  ))}
                </Nav>
              </Collapse>
            )}
          </div>
        </Navbar>
      </header>
    );
  }
}

const MainNavbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { MainNavbar, NavbarTemplate };
