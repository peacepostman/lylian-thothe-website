import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import Hero from '@components/hero';
import WhoAmI from '@components/whoami';
import HomePortfolio from '@components/home-portfolio';
import './layout.css';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return (
    <>
      <Hero link="/musics/action" title="LYLIAN THOTHE - Music Visual Composer" description="I compose the best music for your project" small />
      <HomePortfolio portfolio={edges} />
      <WhoAmI />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Lylian Thothe - </title>;

export const pageQuery = graphql`
  query PortfolioExtract {
    allMarkdownRemark(
      filter: { frontmatter: { folder: { eq: "projects" }, media_type: { eq: "youtube" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            category
            date
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
