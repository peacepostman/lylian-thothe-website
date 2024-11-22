import * as React from 'react';
import { Script } from 'gatsby';
import { css } from '@emotion/react';
import Container from '@components/UI/Container';
import Row from '@components/UI/Row';
import Col from '@components/UI/Col';
import ProjectItem from '@components/projects/ProjectItem';

const wrapper = css`
  background: #000001;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const filters = css`
  text-align: center;
  margin-bottom: 40px;

  li {
    list-style: none;
    font-size: 16px;
    color: #adadad;
    margin-right: 5px;
    display: inline-block;
    cursor: pointer;
    padding: 6px 22px;

    &.active {
      border: 1px solid #fffff1;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
const ProjectListing = ({ edges }: { edges: any }) => {
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
                <li key={tag} data-filter={`.${tag.toLowerCase().replace(/ /g, '-')}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="portfolio__gallery">
          {edges.map((item: any, index: number) => (
            <ProjectItem item={item} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectListing;
