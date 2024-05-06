import * as React from 'react';
import { Link } from 'gatsby';
import Col from '../../components/UI/Col';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { item as itemStyled, media, play, textWrapper, title, tag as tagStyle } from './PortfolioItem.style';

const PortfolioItem = ({ item }: { item: any }) => {
  var image = getImage(item.node.frontmatter.image);
  return (
    <Col lg={4} md={6} sm={6} className={'mix ' + item.node.frontmatter.tags.join(' ')}>
      <div css={itemStyled} itemProp="track" itemScope itemType="https://schema.org/MusicRecording">
        <div css={media}>
          {image && <GatsbyImage image={image} alt={item.node.frontmatter.title} />}
          <Link
            state={{
              modal: true,
            }}
            itemProp="url"
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
          <h4 itemProp="name" css={title}>
            {item.node.frontmatter.title}
          </h4>
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
};

export default PortfolioItem;
