import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import logo from '../../../images/logo.png';

import Container from '../../UI/Container';
import Row from '../../UI/Row';
import Col from '../../UI/Col';

import { header, headerDropdown, headerLogo, headerNavMenu, headerNavOptions, headerSocial } from './Header.style';

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
                    <Link to="/projects/films">Projects</Link>
                    <ul css={headerDropdown(false)} className="dropdown">
                      <li>
                        <Link to="/projects/films">Films</Link>
                      </li>
                      <li>
                        <Link to="/projects/trailers">Trailers</Link>
                      </li>
                      {/* <li>
                        <Link to="/projects/video-games">Video Games</Link>
                      </li>
                      <li>
                        <Link to="/projects/sound-fx">Sound FX</Link>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link to="/musics/action">Musics</Link>
                    <ul css={headerDropdown(true)} className="dropdown">
                      <li>
                        <Link to="/musics/action">Action</Link>
                      </li>
                      <li>
                        <Link to="/musics/chamber-orchestra">Chamber Orchestra</Link>
                      </li>
                      <li>
                        <Link to="/musics/ethnic">Ethnic</Link>
                      </li>
                      <li>
                        <Link to="/musics/hybrid-orchestral-epic">Hybrid Orchestral Epic</Link>
                      </li>
                      <li>
                        <Link to="/musics/intimate">Intimate</Link>
                      </li>
                      <li>
                        <Link to="/musics/electro-ambient">Electro Ambient</Link>
                      </li>
                      <li>
                        <Link to="/musics/orchestral-symphonic">Orchestral Symphonic</Link>
                      </li>
                    </ul>
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
                      <img src={`/static/${icon}`} alt={name} width={15} height={15} />
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
