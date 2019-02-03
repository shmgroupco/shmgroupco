import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";
import { Container, Row, Col } from "reactstrap";

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

import Layout from "../components/Layout";
import Map from "../components/Map";
import HeadshotPlaceholder from "../img/headshot-placeholder.svg";
import CustomLink from "../components/CustomLink";
import "../styles/home.scss";
import purpleDots from "../img/left-purple.png"
import orangeDots from "../img/about-2-decor.png"



export const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
 
  const presenters = upcomingMeetup && upcomingMeetup.presenters;
  const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLatitude);
  const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLongitude);
  const heroStyle = {
    backgroundImage: `url(${home.hero.image})`
  };

  
  return (
    <>
      <section className="hero-2 bg-hero-2 between" style={heroStyle}>
        <Container>
          <Row>
            <Col lg="6" md="12" className="mt-80">
              <div className="hero-text-2 text-center text-lg-left">
                <h1 className="fading" style={{visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                  { home.hero.title } 
                </h1>
                <p className="fading hide-xs" style={{visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                  { home.hero.subtitle }
                </p>
                <a className="button-work orange-gradient fading" href={ home.hero.btnURL } 
                  style={{visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                  { home.hero.btnText }
                </a>
              </div>
            </Col>
          </Row>
        </Container>   
      </section>
      <section className="services mt-10 fading" style={{visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', backgroundImage: `url(${purpleDots})`, backgroundRepeat  : 'no-repeat', backgroundPosition: 'left bottom' }}>
        <Container>
          <div className="title text-center mb-40">
            <h2 className="title-text">
              <span>{ home.services.sectionTitle }</span>
            </h2>
            <p>{ home.services.sectionSubtitle }</p>      
          </div>
          <Row>
          { home.services.servicesList.map(service => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <div className="service-item">
                <div className={`icon-round ${service.background}`}>
                  <i className={service.icon} aria-hidden="true"></i>
                </div>
                <div className="service-text text-center">
                  <h3>{service.title}</h3>
                  <p> 
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Row>
        </Container>
      </section>
      <section className="about between">
        <Container>
          <Row>
            <div className="col-lg-8 offset-lg-2">
              <div className="title text-center">
                <h2 className="title-text">
                  <span className="orange-underline">{ home.about.sectionTitle }</span>
                </h2>
                <p>{ home.about.sectionSubtitle }</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-lg-7">
              <div className="about-slide">
                <div className="about-image about-2-bg" style={{backgroundImage: `url(${orangeDots})`, backgroundRepeat  : 'no-repeat', backgroundPosition: 'top center'}}>
                  <OwlCarousel options={{items:1, center: true, nav: false, dots: false, rewind: true, autoplay: true, responsive: { 0:{ nav: false, dots: false }}}}  >
                  { home.about.slides.map(slide => (
                    <div className="about-item" key={slide.image}>
                      <figure className={slide.filter}>
                        <img className="img-fluid" src={slide.image} alt="slide"/>
                      </figure>
                    </div>
                  ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="col-lg-5 centered">
              <div className="about-text text-center text-lg-left mt-mobile">
                <h2>{ home.about.heading }</h2>
                <p>
                  { home.about.description }
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="work between">
        <Container>
          <Row>
            <div className="col-lg-8 offset-lg-2">
              <div className="title text-center mb-40">
                <h2 className="title-text">
                  <span>Work</span>
                </h2>
                <p>Digital Marketing Agency, providing innovative,</p>
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <OwlCarousel options={{loop:!1,margin:30,mouseDrag:!0,autoplay:!1,center:!0,dots:!0,nav:!1,responsive:{0:{items:1,margin:20},600:{items:2,margin:30},1000:{items:2,margin:0}}}}  >
            <div className="work-item" data-position="0">
              <Row>
                <div className="col-12 col-lg-7">
                  <img className="img-fluid" src="http://melankolia.space/tf/creativora/assets/img/work/4.jpg" alt=""/>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="work-title">
                    <h2>Of Monsters and Men</h2>
                    <p>Web Development, UI / UX</p>
                    <a className="button-work dark-orange-gradient" href="">
                      View Project
                    </a>
                  </div>
                </div>
              </Row>
            </div>
            <div className="work-item" data-position="1">
              <Row>
                <div className="col-12 col-lg-7">
                  <img className="img-fluid" src="http://melankolia.space/tf/creativora/assets/img/work/4.jpg" alt=""/>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="work-title">
                    <h2>Of Monsters and Men</h2>
                    <p>Web Development, UI / UX</p>
                    <a className="button-work dark-orange-gradient" href="">
                      View Project
                    </a>
                  </div>
                </div>
              </Row>
            </div>
            <div className="work-item" data-position="2">
              <Row>
                <div className="col-12 col-lg-7">
                  <img className="img-fluid" src="http://melankolia.space/tf/creativora/assets/img/work/4.jpg" alt=""/>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="work-title">
                    <h2>Of Monsters and Men</h2>
                    <p>Web Development, UI / UX</p>
                    <a className="button-work dark-orange-gradient" href="">
                      View Project
                    </a>
                  </div>
                </div>
              </Row>
            </div>
            <div className="work-item" data-position="3">
              <Row>
                <div className="col-12 col-lg-7">
                  <img className="img-fluid" src="http://melankolia.space/tf/creativora/assets/img/work/4.jpg" alt=""/>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="work-title">
                    <h2>Of Monsters and Men</h2>
                    <p>Web Development, UI / UX</p>
                    <a className="button-work dark-orange-gradient" href="">
                      View Project
                    </a>
                  </div>
                </div>
              </Row>
            </div>
          </OwlCarousel>
          <Row>
            <div className="col-lg-12 text-center mt-40">
              <CustomLink className="dark-button" linkType="internal" linkURL="/works">
                VIEW ALL WORKS
              </CustomLink>
            </div>
          </Row>
        </Container>
      </section>
      <section className="upcomingMeetup  section">
        <div className="upcomingMeetup-container  container">
          <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
          {upcomingMeetup ? (
            <>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
                <span className="upcomingMeetup-detailLabel">Date: </span>
                {upcomingMeetup.formattedDate}
              </p>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
                <span className="upcomingMeetup-detailLabel">Location: </span>
                {upcomingMeetup.location.name}
              </p>
              {presenters.length > 0 && (
                <div className="upcomingMeetup-presenters">
                  {presenters.map(presenter => (
                    <div className="upcomingMeetup-presenter" key={presenter.text}>
                      <img
                        className="upcomingMeetup-presenterImage"
                        src={presenter.image ? presenter.image : HeadshotPlaceholder}
                        alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                      />
                      <span className="upcomingMeetup-presenterName">{presenter.name}</span>
                      <span className="upcomingMeetup-presenterPresentationTitle">
                        {presenter.presentationTitle}
                      </span>
                      <p className="upcomingMeetup-presenterDescription">{presenter.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="upcomingMeetup-mapNote">{home.mapsNote}</p>
              <div className="upcomingMeetup-mapWrapper">
                <Map
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  link={upcomingMeetup.location.mapsLink}
                  latitude={latitude}
                  longitude={longitude}
                />
              </div>
            </>
          ) : (
            <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
          )}
        </div>
      </section>
      <section className="ctaBlock">
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.firstCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.firstCTA.subHeading}</p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.secondCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.secondCTA.subHeading}</p>
          </div>
        </CustomLink>
      </section>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    let upcomingMeetup = null;
    // Find the next meetup that is closest to today
    data.allMarkdownRemark.edges.every(item => {
      const { frontmatter: meetup } = item.node;
      if (isAfter(meetup.rawDate, new Date())) {
        upcomingMeetup = meetup;
        return true;
      } else {
        return false;
      }
    });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} upcomingMeetup={upcomingMeetup} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
            }
            location {
              mapsLatitude
              mapsLongitude
              mapsLink
              name
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            hero {
              title
              subtitle
              btnText
              btnURL
              image
              imageAlt
            }
            services {
              sectionTitle
              sectionSubtitle
              servicesList {
                title
                description
                icon
                background
              }
            }
            about {
              sectionTitle
              sectionSubtitle
              heading
              description
              slides {
                image
                filter
              }
            }
            upcomingMeetupHeading
            noUpcomingMeetupText
            mapsNote
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
