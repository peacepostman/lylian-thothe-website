import * as React from 'react';
import { Link } from 'gatsby';
import Col from '../UI/Col';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { item as itemStyled, media, play, textWrapper, title, tag as tagStyle } from './ProjectItem.style';

const ProjectItem = ({ item }: { item: any }) => {
  var image = getImage(item.node.frontmatter.image);
  return (
    <Col lg={4} md={6} sm={6} className={'mix ' + item.node.frontmatter.tags.map((t) => t.toLowerCase().replace(/ /g, '-')).join(' ')}>
      <div css={itemStyled} itemProp="track" itemScope itemType="https://schema.org/MusicRecording">
        <Link
          state={{
            modal: true,
          }}
          style={{ position: 'relative' }}
          itemProp="url"
          to={'/projects/' + item.node.frontmatter.category + '/' + item.node.frontmatter.slug}
          aria-label={item.node.frontmatter.title}
        >
          <div css={media}>
            {image && <GatsbyImage image={image} alt={item.node.frontmatter.title} />}
            <span css={play}>
              <svg width="24" height="24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
              </svg>
            </span>
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
        </Link>
      </div>
    </Col>
  );
};

export default ProjectItem;
