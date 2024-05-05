import * as React from 'react';
import { Link, Script, graphql, type HeadFC, type PageProps } from 'gatsby';
import Container from '../../components/UI/Container';
import Row from '../../components/UI/Row';
import Col from '../../components/UI/Col';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { wrapper, filters, item as itemStyled, media, play, textWrapper, title, tag as tagStyle } from './index.style';

const PortfolioPage: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  const tags = edges.reduce((acc: any, item: any) => {
    item.node.frontmatter.tags.forEach((tag: string) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return (
    <section css={wrapper} className="portfolio spad">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"
        onLoad={() => {
          var gallery = document.querySelector('.portfolio__gallery');
          if (gallery && window && window.mixitup) {
            var mixer = window.mixitup(gallery);
            console.log('mixer', mixer);
          }
        }}
      />
      <Script>
        {`
        var filterItems = document.querySelectorAll('.portfolio__filter li');
        if (filterItems.length > 0) {
          filterItems.forEach((filterItem) => {
            filterItem.addEventListener('click', function () {
              filterItems.forEach((item) => {
                item.classList.remove('active');
              });
              this.classList.add('active');
            });
          });
        }
        `}
      </Script>
      <Container>
        <Row>
          <Col lg={12}>
            <ul className="portfolio__filter" css={filters}>
              <li className="active" data-filter="*">
                All
              </li>
              {tags.map((tag: any, index: number) => (
                <li key={tag} data-filter={`.${tag.toLowerCase()}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="portfolio__gallery">
          {edges.map((item: any, index: number) => {
            var image = getImage(item.node.frontmatter.image);
            return (
              <Col lg={4} md={6} sm={6} className={'mix ' + item.node.frontmatter.tags.join(' ')} key={index}>
                <div css={itemStyled}>
                  <div css={media}>
                    {image && <GatsbyImage image={image} alt={item.node.frontmatter.title} />}
                    <Link
                      state={{
                        modal: true,
                      }}
                      css={play}
                      to={'/portfolio/' + item.node.frontmatter.slug}
                      aria-label={item.node.frontmatter.title}
                    >
                      <svg width="24" height="24" fill="currentColor">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="portfolio__item__text" css={textWrapper}>
                    <h4 css={title}>{item.node.frontmatter.title}</h4>
                    {item.node.frontmatter.tags && item.node.frontmatter.tags.length > 0 && (
                      <ul>
                        {item.node.frontmatter.tags.map((tag: string) => (
                          <li key={tag} css={tagStyle}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <title>Portfolio ma jeule</title>;

export const pageQuery = graphql`
  query Portfolios {
    allMarkdownRemark {
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
