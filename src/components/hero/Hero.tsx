import * as React from 'react';
import { css } from '@emotion/react';

import me from '../../images/me.jpg';

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

const heroItem = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${me});
  height: 684px;
  padding-top: 255px;
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

const heroTextH2 = css`
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  text-transform: uppercase;
  margin-bottom: 38px;
  position: relative;
`;

const heroTextBtn = css`
  position: relative;
`;

const Hero: React.FC<{}> = () => {
  return (
    <section css={hero}>
      <div css={heroItem} data-setbg="img/hero/me.jpg">
        <Container>
          <Row>
            <Col lg={9}>
              <div>
                <span css={heroTextSpan}>LYLIAN THOTHE - Music Visual Composer</span>
                <h2 css={heroTextH2}>I compose the best music for your project</h2>
                <Link to="/portfolio" css={button}>
                  Listen me now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
