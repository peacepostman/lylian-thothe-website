import React from 'react';
import { HeadFC, Link, graphql } from 'gatsby';
import MuxPlayer from '@mux/mux-player-react';
import '@mux/mux-player/themes/microvideo';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-v5.0';
import { workModal, workModalClose } from '../home-portfolio/HomePortfolio.style';

const ProjectModal = ({ data }: { data: any }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

  return (
    <>
      <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
          <div>
            {modal ? (
              <Link to={closeTo} css={workModalClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
                </svg>
              </Link>
            ) : null}
            <div css={workModal(modal)}>
              <h2>{frontmatter.title}</h2>
              {frontmatter.media_type === 'mux' ? (
                <MuxPlayer theme="microvideo" playbackId={frontmatter.media_src} accentColor="#FF0000" autoPlay />
              ) : frontmatter.media_type === 'soundcloud' ? (
                <iframe
                  allowFullScreen
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${frontmatter.media_src}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
                ></iframe>
              ) : frontmatter.media_type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${frontmatter.media_src}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1`}
                  title={frontmatter.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </ModalRoutingContext.Consumer>
    </>
  );
};

export const Head: HeadFC = ({ data }: { data: any }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
    },
  } = data;

  return <title>Lylian Thothe - Projects - {title}</title>;
};

export const pageQuery = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { folder: { eq: "projects" }, slug: { eq: $slug } }) {
      html
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
`;

export default ProjectModal;
