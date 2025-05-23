import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { work, workItem, workItemHover, workPlay } from './HomePortfolio.style';

const HomeGallery = ({ portfolio }: any) => {
  function setFormat(index: number) {
    if ([0, 6].includes(index)) {
      return 'wide';
    } else if ([3].includes(index)) {
      return 'lg';
    } else {
      return undefined;
    }
  }

  return (
    <section css={work}>
      {portfolio.map((item: any, index: number) => {
        var image = getImage(item.node.frontmatter.image);
        return (
          <div key={index} itemProp="track" itemScope itemType="https://schema.org/MusicRecording" css={workItem(setFormat(index))}>
            <Link
              state={{
                modal: true,
              }}
              itemProp="url"
              to={'/projects/' + item.node.frontmatter.category + '/' + item.node.frontmatter.slug}
              aria-label={item.node.frontmatter.title}
              style={{ position: 'relative' }}
            >
              {image && <GatsbyImage image={image} alt={item.node.frontmatter.title} />}
              <span css={workPlay} aria-label={item.node.frontmatter.title}>
                <svg width="24" height="24" fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
                </svg>
              </span>

              <div css={workItemHover}>
                <h4 itemProp="name">{item.node.frontmatter.name}</h4>
                {item.tags && (
                  <ul>
                    {item.node.tags.map((tag: string) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default HomeGallery;
