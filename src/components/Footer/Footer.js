import React from "react";
import { Container, Row, Col } from 'reactstrap';
import CustomLink from "../CustomLink";

export const FooterTemplate = ({ data }) => {
  const { logoImage, socialLinks, contactInfo, menuItems } = data;

  return (
    <footer className="footer main-footer">
      <Container>
        <Row>
          <Col lg="8" className="offset-lg-2 text-center">
            <ul className="footer-link">
            { menuItems.map(menuItem => (
              <li key={menuItem.linkURL}>
                <CustomLink linkType={menuItem.linkType} linkURL={menuItem.linkURL}>
                  {menuItem.label}
                </CustomLink> 
              </li>
            ))}
            </ul>
          </Col>
          <Col lg="12" className="text-center">
            <div className="logo-footer mt-50">
              <a href="/">
                <img
                  src={logoImage.image}
                  alt={logoImage.imageAlt}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-90 text-center">
          <Col lg="12">
            <h2>Get in Touch</h2>
          </Col>
          <Col lg="4" className="mt-30">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <p>{contactInfo.email}</p>
          </Col>
          <Col lg="4" className="mt-30">
            <i className="fas fa-map-marker" aria-hidden="true"></i>
            <p>
              {contactInfo.address}
            </p>
          </Col>
          <Col lg="4" className="mt-30">
            <i className="fas fa-phone" aria-hidden="true"></i>
            <p>{contactInfo.phone}</p>
          </Col>
        </Row>
        <div className="vertical-dash dark-orange-gradient">
              
        </div>
        {(socialLinks.length > 0) ? 
        <Row className="text-center">
          <Col lg="12">
            <h2>Follow us</h2>
          </Col>
          <div className="col-12 mt-30">
            <ul className="footer-social">
            { socialLinks.map(socialLink => (
              <li key={socialLink.linkURL}>
                <a
                  href={socialLink.linkURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={socialLink.icon}></i>
                </a>
              </li>
            ))}
            </ul>
          </div>
          <div className="col-12 mt-30">
            <p>© {(new Date().getFullYear())} Copyright SHM CO.</p>
          </div>
        </Row>
        : '' }
      </Container>
    </footer>
  );
};

const Footer = props => {
  if (!props.data && !props.navdata) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;

  return <FooterTemplate data={data}/>;
};

export { Footer };
