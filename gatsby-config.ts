import { link } from 'fs';
import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Lylian Thothe Website`,
    siteUrl: `https://lylianthothe.com`,
    socials: [
      // {
      //   name: 'Facebook',
      //   link: 'https://www.facebook.com/',
      //   icon: '/brand-facebook-outlined.png',
      // },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/@ly_filmmusic',
        icon: '/brand-youtube-filled.png',
      },
      // {
      //   name: 'X',
      //   link: 'https://www.x.com/',
      //   icon: '/brand-x-outlined.png',
      // },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@ly_filmmusic',
        icon: '/brand-tiktok-outlined.png',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/ly_filmmusic/',
        icon: '/brand-instagram-outlined.png',
      },
      {
        name: 'Soundcloud',
        link: 'https://soundcloud.com/lylianthothe',
        icon: '/brand-soundcloud-filled.png',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: [],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/projects/',
      },
      __key: 'projects',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['GA-TRACKING_ID'],
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing-v5.0`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(2px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            },
            content: {
              background: '#000',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              border: 'none',
              outline: 'none',
              aspectRatio: '16 / 9',
              margin: 'auto',
              maxWidth: '1080px',
              overflow: 'initial',
              width: '95%',
            },
          },
        },
      },
    },
  ],
};

export default config;
