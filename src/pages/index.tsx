import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
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
      <Hero />
      <HomePortfolio portfolio={edges} />
      <WhoAmI />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

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
