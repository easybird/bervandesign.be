import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';
import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import BervanHomepage from './layouts/BervanHomepage';
import BervanDraftHomepage from './layouts/BervanDraftHomepage';
import BervanThema from './layouts/BervanThema';
import Post from './layouts/Post';

// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = "UA-90395435-1";
if (typeof window !== "undefined") {
  /* eslint-disable import/newline-after-import */
  /* eslint-disable import/max-dependencies */

  // eslint-disable-next-line
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  /* global ga: true */
  // ga comes from google-analytics script injected below
  ga("create", GOOGLE_ANALYTICS_UA, "auto")

  // autotrack
  // https://github.com/googleanalytics/autotrack

  // most important plugin for phenomic
  require("autotrack/lib/plugins/url-change-tracker")
  ga("require", "urlChangeTracker")

  // some plugins you might like
  require("autotrack/lib/plugins/clean-url-tracker")
  ga("require", "cleanUrlTracker")
  require("autotrack/lib/plugins/outbound-form-tracker")
  ga("require", "outboundFormTracker")
  require("autotrack/lib/plugins/outbound-link-tracker")
  ga("require", "outboundLinkTracker")
}

const _route_change_handler = () => {
  if (typeof ga !== 'undefined') {
    ga('send', 'pageview');
  }
};


const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      BervanHomepage,
      BervanDraftHomepage,
      BervanThema,
      Post,
    }}
  />
)

export default (
  <Route
    component={ AppContainer }>
    <Route
      path="*" component={ PageContainer }
      onChange={() => {
        _route_change_handler();
        return true;
      }}
      onEnter={() => {
        _route_change_handler();
        return true;
      }}
    />
  </Route>
)
