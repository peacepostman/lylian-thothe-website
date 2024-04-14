import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import logo from '../../../images/logo.png';

import Container from '../../UI/Container';
import Row from '../../UI/Row';
import Col from '../../UI/Col';

import { header, headerLogo } from './Header.style';

const Header: React.FC<{}> = () => {
  return (
    <header css={header}>
      <Container>
        <Row>
          <Col lg={2}>
            <div css={headerLogo}>
              <Link to="/">
                <img src={logo} width={260} alt="Lylian Thothe" />
              </Link>
            </div>
          </Col>
          <Col lg={10}>
            <div className="header__nav__option">
              <nav className="header__nav__menu mobile-menu">
                <ul>
                  <li>
                    <a href="./portfolio.html">Musics</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="header__nav__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div id="mobile-menu-wrap"></div>
      </Container>
    </header>
  );
};

export default Header;
