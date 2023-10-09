import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Footer from "./footer";
import Seo from "./seo";
import { Helmet } from "react-helmet"

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Helmet>
        <script async src="https://js.sparkloop.app/team_3438fa0f43.js" data-sparkloop></script>
        <script>(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;e.parentNode.insertBefore(t,e);})(window,"https://widgetbe.com/agent",document,"widgetTracker");window.widgetTracker("create", "WT-GZHGEDIV");window.widgetTracker("send", "pageview");
        </script>
        </Helmet>
        <Nav />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;