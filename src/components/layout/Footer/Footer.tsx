import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import logoFooter from '../../../images/logo.png';
import Container from '../../UI/Container';
import Row from '../../UI/Row';
import Col from '../../UI/Col';

import { footer, footerTop, logo, social } from './Footer.style';

const Footer: React.FC<{}> = () => {
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
    <footer css={footer}>
      <Container>
        <div css={footerTop}>
          <Row>
            <Col md={6}>
              <div css={logo}>
                <Link to="/">
                  <img src={logoFooter} width={260} />
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div css={social}>
                {data.site.siteMetadata.socials.map(({ link, name, icon }: { name: string; link: string; icon: string }) => (
                  <a href={link} key={name} title={name}>
                    <img src={`/static/${icon}`} alt={name} />
                  </a>
                ))}
              </div>
              <p>LYLIAN THOTHE MOVIE GAME COMPOSER - COPYRIGHT © 2024 </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
