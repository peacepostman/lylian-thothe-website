import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import ProjectListing from '@components/projects/ProjectListing';

const ProjectsSoundFX: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <ProjectListing edges={edges} />;
};

export default ProjectsSoundFX;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Projects - Sound FX</title>
    <meta
      name="description"
      content="Sound FX is a great way to imagine how to render very specific requests, i expose here some of my favorite creations"
    />
  </>
);

export const pageQuery = graphql`
  query ProjectsSoundFX {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "sound-fx" } } }, sort: { frontmatter: { date: DESC } }) {
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
