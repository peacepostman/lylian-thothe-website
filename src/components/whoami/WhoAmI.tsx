import React from 'react';
import { css } from '@emotion/react';
import me from './../../images/me.jpg';
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
                <h4>My Story begins now</h4>
                <p>
                  I've been playing the guitar for 20 years, and I started playing in bands at a young age. Initially, I was part of rock/metal bands,
                  and later I performed in numerous concerts, notably at some of France's premier venues such as Le Poche in Béthune and Le Splendid
                  in Lille. At the age of 15, I began teaching myself computer-assisted music and developed a deep passion for composing music for
                  visual media. I create numerous compositions for visuals that you can discover on my website for major competitions such as Score
                  Relief. I also write compositions for travel and road trip visual clips for the brand Take Your Bagage. Additionally, I compose
                  introductory music for live shopping events for brands like Boulanger. I also compose music for short films for the production
                  company Zero Idée Production, notably for the short film "Les choses qui vont bien." All these allow me to gain relevant experience
                  for creating the best musics for your project. Don't hesitate to contact me or take a "Rendez-vous" 😉
                </p>
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
