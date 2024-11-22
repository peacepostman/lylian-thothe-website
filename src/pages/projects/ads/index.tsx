import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import ProjectListing from '@components/projects/ProjectListing';

const ProjectsAds: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <ProjectListing edges={edges} />;
};

export default ProjectsAds;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Projects - Ads</title>
    <meta name="description" content="Find here all my musics creations for the video games world" />
  </>
);

export const pageQuery = graphql`
  query ProjectsFilm {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "ads" } } }, sort: { frontmatter: { date: DESC } }) {
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
