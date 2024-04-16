import { link } from 'fs';
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Lylian Thothe Website`,
    siteUrl: `https://www.yourdomain.tld`,
    socials: [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: 'brand-facebook-outlined.svg',
      },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/',
        icon: 'brand-youtube-filled.svg',
      },
      {
        name: 'X',
        link: 'https://www.x.com/',
        icon: 'brand-x-outlined.svg',
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/',
        icon: 'brand-tiktok-outlined.svg',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: 'brand-instagram-outlined.svg',
      },
      {
        name: 'Dribbble',
        link: 'https://www.dribbble.com/',
        icon: 'brand-dribbble-outlined.svg',
      },
      {
        name: 'Soundcloud',
        link: 'https://www.soundcloud.com/',
        icon: 'brand-soundcloud-filled.svg',
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
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
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './src/contents/',
      },
      __key: 'contents',
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
  ],
};

export default config;
