import React from "react";
import PropTypes from "prop-types";
import ScriptTag from 'react-script-tag';

import { HomePageTemplate } from "../../pages/index";

const HomePagePreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return (
    <>
      <ScriptTag isHydrating={true} type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
      <HomePageTemplate home={home} />
    </>
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HomePagePreview;
