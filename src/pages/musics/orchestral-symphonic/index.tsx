import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import MusicListing from '@components/musics/MusicListing';

const MusicAction: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  return <MusicListing edges={edges} />;
};

export default MusicAction;

export const Head: HeadFC = () => (
  <>
    <title>Lylian Thothe - Musics - Orchestral Symphonic</title>
    <meta
      name="description"
      content="I compose a lot of musics inspired by cultural references but also driven by my own emotions. Here are a some titles inspired by orchestral symphonic"
    />
  </>
);

export const pageQuery = graphql`
  query MusicAction {
    allMarkdownRemark(
      filter: { frontmatter: { folder: { eq: "musics" }, category: { eq: "orchestral-symphonic" }, media_type: { eq: "soundcloud" } } }
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
            media_type
            media_src
          }
        }
      }
    }
  }
`;
