import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import ProjectListing from '@components/projects/ProjectListing';

const ProjectsFilms: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <ProjectListing edges={edges} />;
};

export default ProjectsFilms;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Projects - Films</title>
    <meta
      name="description"
      content="Composing for the cinema is my favorite activity, you can find here my composition for various cinema genres."
    />
  </>
);

export const pageQuery = graphql`
  query ProjectsFilms {
    allMarkdownRemark(filter: { frontmatter: { folder: { eq: "projects" }, category: { eq: "films" } } }, sort: { frontmatter: { date: DESC } }) {
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
