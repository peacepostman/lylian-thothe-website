import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import logo from '../../../images/logo.png';

import Container from '../../UI/Container';
import Row from '../../UI/Row';
import Col from '../../UI/Col';

import { header, headerLogo, headerNavMenu, headerNavOptions, headerSocial } from './Header.style';

const Header: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            name
            link
            icon
          }
        }
      }
    }
  `);

  return (
    <header css={header}>
      <Container css={{ position: 'relative' }}>
        <Row>
          <Col lg={2}>
            <div css={headerLogo}>
              <Link to="/">
                <img src={logo} width={260} alt="Lylian Thothe" />
              </Link>
            </div>
          </Col>
          <Col lg={10}>
            <div css={headerNavOptions}>
              <nav css={headerNavMenu}>
                <ul>
                  <li>
                    <Link to="/portfolio">Musics</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div css={headerSocial}>
                {data.site.siteMetadata.socials.map(({ link, name, icon }: { name: string; link: string; icon: string }) => {
                  return (
                    <a href={link} key={name} title={name}>
                      <img src={`static/${icon}`} alt={name} width={15} height={15} />
                    </a>
                  );
                })}
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
