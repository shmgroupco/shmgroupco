import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import { MainNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({ footerData = null, navbarData = null, children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta name="keywords" content="montreal, javascript, programming, meetup" />
    </Helmet>
    <MainNavbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} navdata={navbarData}/>
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            menuItems {
              label
              linkType
              linkURL
            }
            logoImage {
              image
              imageAlt
              tagline
            }
            socialLinks {
              icon
              linkURL
            }
            contactInfo {
              email
              address
              phone
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
