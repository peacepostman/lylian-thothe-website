import React from 'react';
import { css } from '@emotion/react';
import me from './../../images/me.jpg';
import WhoAmIContent from './../../contents/who-am-i.mdx';
import Container from '../UI/Container';
import Row from '../UI/Row';
import Col from '../UI/Col';
import { button } from '../UI/Button';
import { Link } from 'gatsby';

const team = css`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: black;
`;

const teamTitle = css`
  margin-bottom: 90px;

  span {
    color: #ffffff;
    display: block;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  h2 {
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 25px;

    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 5px;
      width: 70px;
      background: #fffff1;
      content: '';
    }
  }
`;

const teamItem = css`
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const teamItemImage = css`
  height: 390px;
  background-image: url(${me});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const teamItemText = css`
  padding: 25px;

  h4 {
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 12px;
  }
`;

const teamBtn = css`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const WhoAmI = () => {
  return (
    <section css={team}>
      <Container>
        <Row>
          <Col lg={12}>
            <div css={teamTitle}>
              <span>Who am I</span>
              <h2>Lylian Thothe</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3} sm={6} css={{ padding: 0 }}>
            <div css={[teamItem, teamItemImage]}></div>
          </Col>
          <Col lg={9} sm={6} css={{ padding: 0 }}>
            <div css={teamItem}>
              <div css={teamItemText}>
                <WhoAmIContent />
              </div>
            </div>
          </Col>
          <Col lg={12} css={{ padding: 0 }}>
            <div css={teamBtn}>
              <Link css={button} to="/contact">
                Contact me for your project
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoAmI;
