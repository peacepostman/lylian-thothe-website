import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Script, graphql } from 'gatsby';
import Hero from '../components/hero';
import WhoAmI from '../components/whoami';
import HomePortfolio from '../components/home-portfolio';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return (
    <>
      <Script id="masonry" src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
      <Hero link="/musics" title="LYLIAN THOTHE - Music Visual Composer" description="I compose the best music for your project" small />
      <HomePortfolio portfolio={edges} />
      <WhoAmI />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Lylian Thothe - </title>;

export const pageQuery = graphql`
  query PortfolioExtract {
    allMarkdownRemark(limit: 7) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 720)
              }
            }
            media_type
            media_src
          }
        }
      }
    }
  }
`;
