import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import ProjectListing from '@components/projects/ProjectListing';

const ProjectsTrailers: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <ProjectListing edges={edges} />;
};

export default ProjectsTrailers;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Projects - Trailers</title>
    <meta name="description" content="Find here all my musics creations for the trailers" />
  </>
);

export const pageQuery = graphql`
  query ProjectsFilm {
    allMarkdownRemark(filter: { frontmatter: { folder: { eq: "projects" }, category: { eq: "trailers" } } }, sort: { frontmatter: { date: DESC } }) {
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
