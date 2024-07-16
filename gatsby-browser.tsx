import * as React from 'react';
import Layout from './src/components/layout/Layout';
import type { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const onRouteUpdate = () => {
  if (window.Masonry) {
    var elem = document.querySelector('.grid');
    if (elem) {
      var msnry = new Masonry('.grid', { itemSelector: '[data-item]', columnWidth: '[data-grid-sizer]', gutter: 0 });
      msnry.layout();
    }
  }
};
