import * as React from 'react';
import Layout from './src/components/layout/Layout';

import type { GatsbySSR } from 'gatsby';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
