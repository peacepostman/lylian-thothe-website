import React from 'react';

import { Link, Script } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { work, workItem, workItemHover, workPlay, gridSizer } from './HomePortfolio.style';

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
    <>
      <Script id="masonry" src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
      <section css={work}>
        <div data-masonry='{ "itemSelector": "[data-item]", "columnWidth": "[data-grid-sizer]", "gutter": 10 }'>
          <div data-grid-sizer css={gridSizer}></div>
          {portfolio.map((item: any, index: number) => {
            console.log('item', { item });
            var image = getImage(item.node.frontmatter.image);
            return (
              <div data-item key={index} css={workItem(setFormat(index))}>
                {image && <GatsbyImage image={image} alt={item.node.frontmatter.title} />}

                <Link
                  state={{
                    modal: true,
                  }}
                  css={workPlay}
                  to={'/portfolio/' + item.node.frontmatter.slug}
                  aria-label={item.node.frontmatter.title}
                >
                  <svg width="24" height="24" fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
                  </svg>
                </Link>

                <div css={workItemHover}>
                  <h4>{item.node.frontmatter.name}</h4>
                  {item.tags && (
                    <ul>
                      {item.node.tags.map((tag: string) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeGallery;
