import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import ProjectListing from '@components/projects/ProjectListing';

const ProjectsVideoGames: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <ProjectListing edges={edges} />;
};

export default ProjectsVideoGames;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Projects - Video Games</title>
    <meta name="description" content="Find here all my musics creations for the video games world" />
  </>
);

export const pageQuery = graphql`
  query ProjectsVideoGames {
    allMarkdownRemark(
      filter: { frontmatter: { folder: { eq: "projects" }, category: { eq: "video-games" } } }
      sort: { frontmatter: { date: DESC } }
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
