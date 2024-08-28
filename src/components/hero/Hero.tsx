import * as React from 'react';
import { css } from '@emotion/react';

import { Link } from 'gatsby';
import { button } from '../UI/Button/Button';
import Container from '../UI/Container';
import Row from '../UI/Row';
import Col from '../UI/Col';

const hero = css`
  display: block;
  width: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const heroItem = (small?: boolean) => css`
  height: ${small ? '360px' : '684px'};
  padding-top: ${small ? '140px' : '255px'};
`;

const heroTextSpan = css`
  color: #ffffff;
  display: block;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
  position: relative;
`;

const heroTextH2 = (small?: boolean) => css`
  color: #ffffff;
  font-size: ${small ? '30px' : '60px'};
  font-weight: 700;
  line-height: ${small ? '40px' : '70px'};
  text-transform: uppercase;
  margin-bottom: 38px;
  position: relative;
`;

type HeroType = { title: string; description: string; link?: string; small?: boolean };

const Hero: React.FC<HeroType> = ({ title, description, link, small }: HeroType) => {
  return (
    <section css={hero}>
      <div css={heroItem(small)} data-setbg="img/hero/me.jpg">
        <Container>
          <Row>
            <Col lg={9}>
              <div>
                <span css={heroTextSpan}>{title}</span>
                <h2 css={heroTextH2(small)}>{description}</h2>
                {link && (
                  <Link to={link} css={button}>
                    Listen me now
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;

// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// background-image: url(${me});
